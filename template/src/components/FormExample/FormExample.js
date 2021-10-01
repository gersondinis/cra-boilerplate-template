import React from 'react';
import {Box, Button, Grid, TextField} from '@material-ui/core';
import {Controller, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './FormExampleSchemaValidation';
import Loading from '../common/Loading/Loading';

const FormExample = () => {
    const {control, handleSubmit, formState: { errors, isSubmitting }} = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <Box maxWidth={'xs'}>
            <Loading loading={isSubmitting}/>
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
                    <Button onClick={handleSubmit(data => console.log(data))} variant={'outlined'}>Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FormExample;