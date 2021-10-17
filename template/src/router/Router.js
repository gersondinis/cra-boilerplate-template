import {useRoutes} from 'hookrouter';
import HelpPage from '../scenes/HelpPage';
import PageNotFound from '../scenes/PageNotFound';
import ExamplesPage from '../scenes/ExamplesPage';

export const Router = () => {

  const routes = {
    '/': () => <HelpPage/>,
    '/examples': () => <ExamplesPage/>,
  };

  return useRoutes(routes) || <PageNotFound/>;
};

export default Router;