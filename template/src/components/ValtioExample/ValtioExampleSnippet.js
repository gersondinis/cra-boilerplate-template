import React, {useState} from 'react';
import {CardActions, CardContent, Collapse, IconButton} from '@mui/material';
import {Code, CodeOff} from '@mui/icons-material';
import {CopyBlock, zenburn} from 'react-code-blocks';

const ValtioExampleSnippet = () => {
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
          <CopyBlock
            text={[
              '// Create the `Store` object',
              'export const store = proxy({count: 0});',
              '',
              'const Example = () => {',
              '  // Immutably read from the `useSnapshot` hook',
              '  const {count} = useSnapshot(store);',
              '',
              '  // Modify the `store` directly (not the snapshot!)',
              '  return (',
              '    <button onClick={() => --store.count}>-</button>',
              '    <div>{count}</div>',
              '    <button onClick={() => ++store.count}>+</button>',
              '  );',
              '}',
            ].join('\n')}
            language={'jsx'}
            showLineNumbers
            theme={zenburn}
            highlight={'1-2,5,8,10-12'}
            codeBlock
          />
        </CardContent>
      </Collapse>
    </>
  );
};

export default ValtioExampleSnippet;
