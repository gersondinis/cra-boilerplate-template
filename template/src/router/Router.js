import {useRoutes} from 'hookrouter';
import HelpPage from '../scenes/HelpPage';
import PageNotFound from '../scenes/PageNotFound';
import ExamplesPage from '../scenes/ExamplesPage';

export const Router = () => {

  const routes = {
    '/': () => <ExamplesPage/>,
    '/about': () => <HelpPage/>,
  };

  return useRoutes(routes) || <PageNotFound/>;
};

export default Router;
