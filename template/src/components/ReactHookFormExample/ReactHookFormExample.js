import React from 'react';
import {Box, Button, Card, CardContent, CardHeader, FormControlLabel, Grid, Switch, TextField} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import schema from './SchemaValidation';
import LoadingFeedback from './LoadingFeedback';
import EmailField from './EmailField';

let rerenders = 0;
const ReactHookFormExample = () => {
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Card raised>
      <CardHeader title={'react-hook-form example'} subheader={`forms (${++rerenders})`}/>
      <CardContent>
        <Box maxWidth={'xs'}>
          <LoadingFeedback control={control}/>
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
              <EmailField control={control}/>
            </Grid>
            <Grid xs={12} item>
              <Button onClick={handleSubmit(data => alert(JSON.stringify(data)))} variant={'outlined'}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReactHookFormExample;
