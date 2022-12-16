import {TextField} from '@mui/material';
import {Controller, useFormContext, useWatch} from 'react-hook-form';

let rerenders = 0;
export const EmailField = () => {

  const {control} = useFormContext();
  const withEmail = useWatch({name: 'withEmail'});

  if (!withEmail) return null;

  return (
    <>
      Email re-renders: {++rerenders}<br/>
      <Controller
        name={'email'}
        control={control}
        defaultValue={''}
        render={({field, fieldState: {error}}) => (
          <TextField
            {...field}
            label={'Email'}
            variant={'outlined'}
            error={Boolean(error)}
            helperText={error?.message}
            fullWidth
          />
        )}
      />
    </>
  );
};
