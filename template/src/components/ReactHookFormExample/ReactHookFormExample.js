import React from 'react';
import {Box, Button, Card, CardContent, CardHeader, FormControlLabel, Grid, Switch, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import schema from './SchemaValidation';
import LoadingScreen from '../common/LoadingScreen/LoadingScreen';

const ReactHookFormExample = () => {
  const {control, handleSubmit, watch, formState: {errors, isSubmitting}} = useForm({
    resolver: yupResolver(schema)
  });

  const withEmail = watch('withEmail');

  return (
    <Card raised>
      <CardHeader title={'react-hook-form example'} subheader={'forms'}/>
      <CardContent>
        <Box maxWidth={'xs'}>
          react-hook-form example
          <LoadingScreen loading={isSubmitting}/>
          <Grid spacing={2} container>
            <Grid xs={6} item>
              <Controller
                name={'firstName'}
                control={control}
                defaultValue={''}
                render={({field}) => (
                  <TextField
                    {...field}
                    label={'First name'}
                    variant={'outlined'}
                    error={Boolean(errors?.firstName)}
                    helperText={errors?.firstName?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={6} item>
              <Controller
                name={'lastName'}
                control={control}
                defaultValue={''}
                render={({field}) => (
                  <TextField
                    {...field}
                    label={'Last name'}
                    variant={'outlined'}
                    error={Boolean(errors?.lastName)}
                    helperText={errors?.lastName?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={12} item>
              With email:
              <Controller
                name={'withEmail'}
                control={control}
                defaultValue={false}
                render={({field}) => (
                  <FormControlLabel control={<Switch {...field} />} label={'With email'}/>
                )}
              />
            </Grid>
            <Grid xs={6} hidden={!withEmail} item>
              <Controller
                name={'email'}
                control={control}
                defaultValue={''}
                render={({field}) => (
                  <TextField
                    {...field}
                    label={'Email'}
                    variant={'outlined'}
                    error={Boolean(errors?.email)}
                    helperText={errors?.email?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={12} item>
              <Button onClick={handleSubmit(data => console.log(data))} variant={'outlined'}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReactHookFormExample;
