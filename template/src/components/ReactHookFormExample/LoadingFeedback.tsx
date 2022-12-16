import {useFormState} from 'react-hook-form';
import {LoadingScreen} from 'components/common/LoadingScreen/LoadingScreen';

export const LoadingFeedback = () => {
  const {isSubmitting} = useFormState();

  return <LoadingScreen loading={isSubmitting}/>;
};
