import {FC, ReactNode, useEffect} from 'react';
import {useMediaQuery} from '@mui/material';
import {actions} from 'store/actions';
import type {Theme} from '@mui/material';

export const AppInitProvider: FC<IAppInitProvider> = ({children}) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    actions.app.init();
  }, []);

  useEffect(() => {
    actions.app.setSidebarOpen(isDesktop);
  }, [isDesktop]);

  return (
    <>
      {children}
    </>
  );
};

export type IAppInitProvider = {
  children: ReactNode
}
