import React from 'react';
import {Card, CardContent, CardHeader} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import schema from './SchemaValidation';
import FormExample from './FormExample';

let rerenders = 0;
const ReactHookFormExample = () => {
  const methods = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Card raised>
      <CardHeader title={'react-hook-formExample example'} subheader={`forms (${++rerenders})`}/>
      <CardContent>
        <FormProvider {...methods}>
          <FormExample/>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default ReactHookFormExample;
