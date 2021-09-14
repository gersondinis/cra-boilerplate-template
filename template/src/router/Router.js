import {useRoutes} from 'hookrouter';
import Help from '../scenes/Help';
import PageNotFound from '../scenes/PageNotFound';

export const Router = () => {

    const routes = {
        '/': () => <Help/>
    };

    return useRoutes(routes) || <PageNotFound/>;
};

export default Router;