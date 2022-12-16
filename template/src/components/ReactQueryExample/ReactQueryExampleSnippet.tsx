import {useState} from 'react';
import {CardActions, CardContent, Collapse, IconButton, Typography} from '@mui/material';
import {Code, CodeOff} from '@mui/icons-material';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';


export const ReactQueryExampleSnippet = () => {
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
          <Typography>Query:</Typography>
          <SyntaxHighlighter language={'jsx'} showLineNumbers>
            {[
              '// Create the query',
              'export const useGetList: () => useQuery(',
              '    [\'POST\', \'LIST\'],',
              '    () => axios.get(\'/posts\').then(({data}) => data),',
              ')',
              '',
              '// use it like this:',
              'const {data, error, isLoading, isError} = useGetList();',
            ].join('\n')}
          </SyntaxHighlighter>
          <Typography>Mutation:</Typography>
          <SyntaxHighlighter language={'jsx'} showLineNumbers>
            {[
              '// Create the mutation',
              'export const useCreate: () => useMutation(',
              '    [\'POST\', \'CREATE\'],',
              '    post => axios.post(\'/posts\', post).then(({data}) => data),',
              '    {onSuccess: () => queryClient.invalidateQueries([\'POST\', \'LIST\'])}',
              '),',
              '',
              '// use it like this:',
              'const {mutate, data, error, isLoading, isError} = useCreate();',
              '',
              '<button onClick={() => mutate({title: \'New post\'})}>Create new</button>',
            ].join('\n')}
          </SyntaxHighlighter>
        </CardContent>
      </Collapse>
    </>
  );
};
