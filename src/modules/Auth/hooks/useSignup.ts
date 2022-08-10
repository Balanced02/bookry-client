import { useMutation } from '@tanstack/react-query';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { SignupInputs } from 'modules/Auth/types';

export const useSignup = () => {
  const { callApi } = useApi();
  const { showSuccess, showError } = useAlert();
  const mutation = useMutation(
    async (user: SignupInputs) => callApi({ url: '/auth/register', data: user, method: 'POST' }),
    {
      onSuccess: async (res) => {
        // TODO: dispatch all neccesary data
        console.log('registerRes', res);
        showSuccess({ title: 'Signup Successful!', description: 'You are too good' });
      },
      onError: async (error) => {
        // TODO: dispatch all neccesary data
        console.log('registerError', error);
        showError({ title: 'Signup Error', description: "You're a dummy" });
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
