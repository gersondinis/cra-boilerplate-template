import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardContent, CardHeader, Stack, TextField } from '@mui/material';
import { schema } from './SchemaValidation';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import {actions} from 'store/actions';
import {useNavigate} from 'react-router';
import {ROUTE} from 'types/routes.enum';
import {useState} from 'react';
import {LoadingScreen} from 'components/common/LoadingScreen/LoadingScreen';
import {toast} from 'react-toastify';
import {parseErrorMessage} from 'services/error/error.service';
import {queryClient} from 'providers/ReactQueryProvider/ReactQueryProvider';
import {getUser} from 'xhr/endpoints/api.endpoints';
import {QUERY_KEYS} from 'xhr/hooks/api';
import {IUser} from 'types/domain/User.types';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const methods = useForm<{userId: IUser['id']}>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Card raised>
        <CardHeader title={'Login'} />
        <CardContent>
          <Stack gap={1}>
            <Controller
              name={'userId'}
              defaultValue={''}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={'User ID'}
                  variant={'outlined'}
                  error={Boolean(error)}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Button color={'primary'} variant={'contained'} onClick={methods.handleSubmit(async ({userId}) => {
              setLoading(true);
              try {
                const user = await getUser({id: userId});
                queryClient.setQueryData([QUERY_KEYS.GET_USER, userId], user);
                actions.login(userId);
                navigate(ROUTE.HOME);
              } catch (e) {
                toast.error(parseErrorMessage(e));
              }
              setLoading(false);
            })}>
              Submit
            </Button>
          </Stack>
        </CardContent>
      </Card>
      {loading && <LoadingScreen/>}
    </FormProvider>
  );
};
