import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router';
import {Homepage} from 'pages/Homepage';
import {AboutPage} from 'pages/AboutPage';
import {NotFound} from 'pages/common/errors/NotFound';
import {Forbidden} from 'pages/common/errors/Forbidden';
import {Unauthorized} from 'pages/common/errors/Unauthorized';
import {Page} from 'pages/common/page/Page';
import {LoginPage} from 'pages/common/authentication/LoginPage';
import {LogoutPage} from 'pages/common/authentication/LogoutPage';
import {ROUTE} from 'types/routes.enum';


export const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Page><Homepage/></Page>} />
      <Route path={ROUTE.ABOUT} element={<Page><AboutPage/></Page>} />
      <Route path={ROUTE.UNAUTHORIZED} element={<Unauthorized/>} />
      <Route path={ROUTE.FORBIDDEN} element={<Forbidden/>} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound/>} />
      <Route path={ROUTE.LOGIN} element={<LoginPage/>} />
      <Route path={ROUTE.LOGOUT} element={<LogoutPage/>} />
      <Route path={'*'} element={<Navigate to={ROUTE.HOME}/>} />
    </Routes>
  );
}
