import {LoadingFeedback} from './LoadingFeedback';
import {Box, Button, FormControlLabel, Grid, Switch, TextField} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {EmailField} from './EmailField';

let rerenders = 0;
export const FormExample = () => {
  const {control, handleSubmit} = useFormContext();

  return (
    <Box maxWidth={'xs'}>
      Inner Form re-renders: {++rerenders}<br/>
      <LoadingFeedback/>
      <Grid spacing={2} container>
        <Grid xs={12} lg={6} item>
          <Controller
            name={'firstName'}
            control={control}
            defaultValue={''}
            render={({field, fieldState: {error}}) => (
              <TextField
                {...field}
                label={'First name'}
                variant={'outlined'}
                error={Boolean(error)}
                helperText={error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid xs={12} lg={6} item>
          <Controller
            name={'lastName'}
            control={control}
            defaultValue={''}
            render={({field, fieldState: {error}}) => (
              <TextField
                {...field}
                label={'Last name'}
                variant={'outlined'}
                error={Boolean(error)}
                helperText={error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid xs={12} item>
          <Controller
            name={'withEmail'}
            control={control}
            defaultValue={false}
            render={({field}) => (
              <FormControlLabel control={<Switch {...field} />} label={'With email'}/>
            )}
          />
        </Grid>
        <Grid xs={12} item>
          <EmailField/>
        </Grid>
        <Grid xs={12} item>
          <Button onClick={handleSubmit(data => alert(JSON.stringify(data)))} variant={'outlined'}>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
