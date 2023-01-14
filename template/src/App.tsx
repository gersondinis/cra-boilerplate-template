import {LoadingScreen} from 'components/common/LoadingScreen/LoadingScreen';
import {FC, lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router';
import {ROUTE} from 'types/routes.enum';

const Page = lazy(() => import('pages/common/page/Page').then(m => ({ default: m.Page })));
const Homepage = lazy(() => import('pages/Homepage').then(m => ({ default: m.Homepage })));
const AboutPage = lazy(() => import('pages/AboutPage').then(m => ({ default: m.AboutPage })));
const NotFound = lazy(() => import('pages/common/errors/NotFound').then(m => ({ default: m.NotFound })));
const Forbidden = lazy(() => import('pages/common/errors/Forbidden').then(m => ({ default: m.Forbidden })));
const Unauthorized = lazy(() => import('pages/common/errors/Unauthorized').then(m => ({ default: m.Unauthorized })));
const LoginPage = lazy(() => import('pages/common/authentication/LoginPage').then(m => ({ default: m.LoginPage })));
const LogoutPage = lazy(() => import('pages/common/authentication/LogoutPage').then(m => ({ default: m.LogoutPage })));


export const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Suspense fallback={<LoadingScreen/>}><Page><Homepage/></Page></Suspense>} />
      <Route path={ROUTE.ABOUT} element={<Suspense fallback={<LoadingScreen/>}><Page><AboutPage/></Page></Suspense>} />
      <Route path={ROUTE.UNAUTHORIZED} element={<Suspense fallback={<LoadingScreen/>}><Unauthorized/></Suspense>} />
      <Route path={ROUTE.FORBIDDEN} element={<Suspense fallback={<LoadingScreen/>}><Forbidden/></Suspense>} />
      <Route path={ROUTE.NOT_FOUND} element={<Suspense fallback={<LoadingScreen/>}><NotFound/></Suspense>} />
      <Route path={ROUTE.LOGIN} element={<Suspense fallback={<LoadingScreen/>}><LoginPage/></Suspense>} />
      <Route path={ROUTE.LOGOUT} element={<Suspense fallback={<LoadingScreen/>}><LogoutPage/></Suspense>} />
      <Route path={'*'} element={<Navigate to={ROUTE.HOME}/>} />
    </Routes>
  );
}
