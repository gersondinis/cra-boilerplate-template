import React, {useState} from 'react';
import {IconButton} from '@mui/material';
import {DevTool} from '@hookform/devtools';
import DeveloperMode from '@mui/icons-material/DeveloperMode';

const DevToolsContainer = () => {
  const [devToolOpen, setDevToolOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setDevToolOpen(old => !old)}><DeveloperMode/></IconButton>
      {devToolOpen && <DevTool/>}
    </>
  );
};

export default DevToolsContainer;
