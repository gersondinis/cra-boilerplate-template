import React, {useState} from 'react';
import {CopyBlock, zenburn} from 'react-code-blocks';
import {CardActions, CardContent, Collapse, IconButton, Typography} from '@mui/material';
import {Code, CodeOff} from '@mui/icons-material';

const ReactHookFormExampleSnippet = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <CardActions disableSpacing>
        <IconButton onClick={() => setExpanded(oldExpanded => !oldExpanded)} sx={{marginLeft: 'auto'}}>
          {expanded ? <CodeOff/> : <Code/>}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Provider:</Typography>
          <CopyBlock
            text={[
              "" +
              "const ReactHookFormExample = () => {\n" +
              "\n" +
              "  const methods = useForm({\n" +
              "    resolver: yupResolver(schema)\n" +
              "  });\n" +
              "\n" +
              "  return (\n" +
              "    <Card raised>\n" +
              "      <CardContent>\n" +
              "        <FormProvider {...methods}>\n" +
              "          <FormExample/>\n" +
              "        </FormProvider>\n" +
              "      </CardContent>",
            ].join('\n')}
            language={'jsx'}
            showLineNumbers
            theme={zenburn}
            highlight={'3-5,10,12'}
            codeBlock
          />
          <Typography>Schema:</Typography>
          <CopyBlock
            text={[
              "export const schema = Yup.object().shape({\n" +
              "  firstName: Yup\n" +
              "    .string().required(),\n" +
              "  lastName: Yup.string().required(),\n" +
              "  withEmail: Yup.bool(),\n" +
              "  email: Yup.string().when('withEmail', {\n" +
              "    is: true, // alternatively: (val) => val === true\n" +
              "    then: Yup.string().email().required()\n" +
              "  })\n" +
              "}).required();",
            ].join('\n')}
            language={'jsx'}
            showLineNumbers
            theme={zenburn}
            codeBlock
          />
          <Typography>Form example:</Typography>
          <CopyBlock
            text={[
              "const FormExample = () => {\n" +
              "  const {control, handleSubmit} = useFormContext();\n" +
              "\n" +
              "  return (\n" +
              "    <Box maxWidth={'xs'}>\n" +
              "      <Grid spacing={2} container>\n" +
              "        <Grid xs={12} lg={6} item>\n" +
              "          <Controller\n" +
              "            name={'firstName'}\n" +
              "            control={control}\n" +
              "            defaultValue={''}\n" +
              "            render={({field, fieldState: {error}}) => (\n" +
              "              <TextField\n" +
              "                {...field}\n" +
              "                label={'First name'}\n" +
              "                variant={'outlined'}\n" +
              "                error={Boolean(error)}\n" +
              "                helperText={error?.message}\n" +
              "                fullWidth\n" +
              "              />\n" +
              "            )}\n" +
              "          />\n" +
              "        </Grid>\n" +
              "        <Grid xs={12} lg={6} item>\n" +
              "          <Controller\n" +
              "            name={'lastName'}\n" +
              "            control={control}\n" +
              "            defaultValue={''}\n" +
              "            render={({field, fieldState: {error}}) => (\n" +
              "              <TextField\n" +
              "                {...field}\n" +
              "                label={'Last name'}\n" +
              "                variant={'outlined'}\n" +
              "                error={Boolean(error)}\n" +
              "                helperText={error?.message}\n" +
              "                fullWidth\n" +
              "              />\n" +
              "            )}\n" +
              "          />\n" +
              "        </Grid>\n" +
              "        <Grid xs={12} item>\n" +
              "          <Controller\n" +
              "            name={'withEmail'}\n" +
              "            control={control}\n" +
              "            defaultValue={false}\n" +
              "            render={({field}) => (\n" +
              "              <FormControlLabel control={<Switch {...field} />} label={'With email'}/>\n" +
              "            )}\n" +
              "          />\n" +
              "        </Grid>\n" +
              "        <Grid xs={12} item>\n" +
              "          <EmailField/>\n" +
              "        </Grid>\n" +
              "        <Grid xs={12} item>\n" +
              "          <Button onClick={handleSubmit(data => alert(JSON.stringify(data)))} variant={'outlined'}>Submit</Button>\n" +
              "        </Grid>\n" +
              "      </Grid>\n" +
              "    </Box>\n" +
              "  );\n" +
              "};",
            ].join('\n')}
            language={'jsx'}
            showLineNumbers
            theme={zenburn}
            highlight={'2,8-9,10-22,25-39,42-49,52,55'}
            codeBlock
          />
          <Typography>Email field:</Typography>
          <CopyBlock
            text={[
              "const EmailField = () => {\n" +
              "\n" +
              "  const {control} = useFormContext();\n" +
              "  const withEmail = useWatch({name: 'withEmail'});\n" +
              "\n" +
              "  if (!withEmail) return null;\n" +
              "\n" +
              "  return (\n" +
              "    <>\n" +
              "      <Controller\n" +
              "        name={'email'}\n" +
              "        control={control}\n" +
              "        defaultValue={''}\n" +
              "        render={({field, fieldState: {error}}) => (\n" +
              "          <TextField\n" +
              "            {...field}\n" +
              "            label={'Email'}\n" +
              "            variant={'outlined'}\n" +
              "            error={Boolean(error)}\n" +
              "            helperText={error?.message}\n" +
              "            fullWidth\n" +
              "          />\n" +
              "        )}\n" +
              "      />\n" +
              "    </>\n" +
              "  );\n" +
              "};",
            ].join('\n')}
            language={'jsx'}
            showLineNumbers
            theme={zenburn}
            highlight={'3-4,6,10-24'}
            codeBlock
          />
        </CardContent>
      </Collapse>
    </>
  );
};

export default ReactHookFormExampleSnippet;
