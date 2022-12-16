import {useState} from 'react';
import {CardActions, CardContent, Collapse, IconButton, Typography} from '@mui/material';
import {Code, CodeOff} from '@mui/icons-material';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

export const ReactHookFormExampleSnippet = () => {
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
          <SyntaxHighlighter language={'jsx'} showLineNumbers>
            {
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
              "      </CardContent>"
            }
          </SyntaxHighlighter>
          <Typography>Schema:</Typography>
          <SyntaxHighlighter language={'js'} showLineNumbers>
            {
              "export const schema = Yup.object().shape({\n" +
              "  firstName: Yup\n" +
              "    .string().required(),\n" +
              "  lastName: Yup.string().required(),\n" +
              "  withEmail: Yup.bool(),\n" +
              "  email: Yup.string().when('withEmail', {\n" +
              "    is: true, // alternatively: (val) => val === true\n" +
              "    then: Yup.string().email().required()\n" +
              "  })\n" +
              "}).required();"
            }
          </SyntaxHighlighter>
          <Typography>Form example:</Typography>
          <SyntaxHighlighter language={'jsx'} showLineNumbers>
            {
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
              "};"
           }
          </SyntaxHighlighter>

          <Typography>Email field:</Typography>
          <SyntaxHighlighter language={'jsx'} showLineNumbers>
            {
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
              "};"
            }
          </SyntaxHighlighter>
        </CardContent>
      </Collapse>
    </>
  );
};
