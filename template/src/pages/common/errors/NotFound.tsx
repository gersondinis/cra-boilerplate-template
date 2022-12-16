import {GenericError} from 'pages/common/errors/GenericError';
import {PUBLIC_URL} from 'services/env/environment.service';

export const NotFound = () => {
  return (
    <GenericError
      title={`404: The page you are looking for isn't here`}
      description={`You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation.`}
      imgSrc={`${PUBLIC_URL}/static/images/undraw_not_found_60pq.svg`}
    />
  );
};
