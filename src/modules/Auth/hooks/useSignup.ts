import { useMutation } from '@tanstack/react-query';
import { useApi } from 'utils/useApi';
import { SignupInputs } from 'types';

export const useSignup = () => {
  const { callApi } = useApi();
  const mutation = useMutation(
    async (user: SignupInputs) => callApi({ url: '/auth/register', data: user, method: 'POST' }),
    {
      onSuccess: async (res) => {
        // TODO: dispatch all neccesary data
        console.log('registerRes', res);
      },
      onError: async (error) => {
        // TODO: dispatch all neccesary data
        console.log('registerError', error);
      },
    },
  );

  const { isLoading, error, data } = mutation;
  // TODO: Get this from context
  const signupFunc = (data: SignupInputs) => {
    mutation.mutate(data);
  };

  return { signupFunc, data, error, isLoading };
};

export default useSignup;
