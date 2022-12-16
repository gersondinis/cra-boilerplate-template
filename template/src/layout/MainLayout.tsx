import {Box} from '@mui/material';
import {AppBar} from 'layout/main-layout/AppBar';
import {Sidebar} from 'layout/main-layout/Sidebar';
import {FC, ReactNode} from 'react';

export const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar/>
      <Sidebar/>
      <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '3.75rem'}}>
        {children}
      </Box>
    </Box>
  );
};

export type IMainLayout = {
  children: ReactNode;
}

