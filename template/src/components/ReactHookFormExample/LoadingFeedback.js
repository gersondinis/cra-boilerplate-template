import {useFormState} from 'react-hook-form';
import {LoadingScreen} from 'components/common/LoadingScreen/LoadingScreen';

const LoadingFeedback = () => {
  const {isSubmitting} = useFormState();

  return <LoadingScreen loading={isSubmitting}/>;
};

export default LoadingFeedback;
