import {FC, ReactNode, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useStore} from 'store/store';
import {ROUTE} from 'types/routes.enum';

export const AuthenticationGuard: FC<IAuthenticationGuard> = ({children}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {userId: isAuthenticated} = useStore();

  useEffect(() => {
    if (!isAuthenticated && ![ROUTE.LOGIN, ROUTE.LOGOUT].includes(pathname as ROUTE)) {
      navigate(ROUTE.LOGIN);
    }
  }, [isAuthenticated, navigate, pathname]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export type IAuthenticationGuard = {
  children: ReactNode
}
