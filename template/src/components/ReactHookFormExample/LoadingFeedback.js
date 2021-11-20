import React from 'react';
import {useFormState} from 'react-hook-form';
import LoadingScreen from '../common/LoadingScreen/LoadingScreen';

const LoadingFeedback = ({control}) => {

  const {isSubmitting} = useFormState({control});

  return <LoadingScreen loading={isSubmitting}/>;
};

export default LoadingFeedback;
