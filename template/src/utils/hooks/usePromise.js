import {useState} from 'react';

/**
 * Hook to handle a promise callable on a React way. [JSDoc]
 *
 * @param {function(...args: any[]): Promise} promise
 * @returns {[invoke: any, {result: null, isLoading: boolean, error: null}]}
 */
const usePromise = (promise) => {
  const [promiseFeedback, setPromiseFeedback] = useState({result: null, error: null, isLoading: false})

  const invoke = (...args) => {
    setPromiseFeedback({result: null, error: null, isLoading: true});
    promise(...args)
      .then((result) => setPromiseFeedback({result, error: null, isLoading: false}))
      .catch((error) => setPromiseFeedback({result: null, error, isLoading: false}))
  };

  return [invoke, promiseFeedback];
};

export default usePromise;
