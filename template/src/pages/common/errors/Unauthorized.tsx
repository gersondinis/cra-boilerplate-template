import {GenericError} from 'pages/common/errors/GenericError';
import {PUBLIC_URL} from 'services/env/environment.service';

export const Unauthorized = () => {
  return (
    <GenericError
      title={'401: Unauthorized'}
      description={`You don't have permissions to access this application.`}
      imgSrc={`${PUBLIC_URL}/static/images/undraw_close_tab_uk6g.svg`}
    />
  );
};

export default Unauthorized;
