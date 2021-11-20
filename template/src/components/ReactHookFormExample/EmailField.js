import React from 'react';
import {TextField} from '@mui/material';
import {Controller, useWatch} from 'react-hook-form';

const EmailField = ({control}) => {

  const withEmail = useWatch({control, name: 'withEmail'});

  if (!withEmail) return null;

  return (
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
  );
};

export default EmailField;
