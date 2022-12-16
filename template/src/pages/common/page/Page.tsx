import {AuthenticationGuard} from 'pages/common/guards/AuthenticationGuard';
import {MainLayout} from 'layout/MainLayout';
import {FC, ReactNode} from 'react';
import {Dummy} from 'components/common/Dummy/Dummy';

export const Page: FC<IPage> = ({children, withMainLayout = true, withAuthentication = true}) => {
  const GuardAuthentication = withAuthentication ? AuthenticationGuard : Dummy;
  const LayoutMain = withMainLayout ? MainLayout : Dummy;

  return (
    <GuardAuthentication>
      <LayoutMain>{children}</LayoutMain>
    </GuardAuthentication>
  );
};

export type IPage = {
  children: ReactNode
  withMainLayout?: boolean
  withAuthentication?: boolean
}
