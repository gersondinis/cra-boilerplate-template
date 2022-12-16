import {useEffect, useState} from 'react';
import {Card, CardContent, CardHeader, IconButton} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema, schema2} from './SchemaValidation';
import {FormExample} from './FormExample';
import {ReactHookFormExampleSnippet} from './ReactHookFormExampleSnippet';
import PublishedWithChanges from '@mui/icons-material/PublishedWithChanges';

const schemas = [
  schema,
  schema2
];

let rerenders = 0;
export const ReactHookFormExample = () => {
  const [step, setStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(schemas[step])
  });

  // Listen the step changes and trigger revalidation
  useEffect(() => {
    if (rerenders > 1) {
      methods.trigger();
    }
  }, [step, methods]);

  return (
    <FormProvider {...methods}>
      <Card raised>
        <CardHeader
          title={'react-hook-form example'}
          subheader={`forms (${++rerenders})`}
          action={(
            <>
              <IconButton title={'Swap validation schema'} onClick={() => setStep(oldStep => !oldStep ? 1 : 0)}>
                <PublishedWithChanges/>
              </IconButton>
            </>
          )}
        />
        <CardContent>
          <FormExample/>
        </CardContent>
        <ReactHookFormExampleSnippet/>
      </Card>
    </FormProvider>
  );
};
