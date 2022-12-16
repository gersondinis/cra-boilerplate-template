import {GenericError} from 'pages/common/errors/GenericError';
import {PUBLIC_URL} from 'services/env/environment.service';

export const Forbidden = () => {
  return (
    <GenericError
      title={'403: Forbidden'}
      description={`You don't have permissions to access this page.`}
      imgSrc={`${PUBLIC_URL}/static/images/undraw_close_tab_uk6g.svg`}
    />
  );
};

export default Forbidden;
