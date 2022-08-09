import { useMutation } from '@tanstack/react-query';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { SignupInputs } from 'types';

export const useSignup = () => {
  const { callApi } = useApi();
  const { showSuccess, showInfo, showError } = useAlert();
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
    showSuccess({ title: 'Good', description: 'You are too good' });
    showInfo({ title: 'Good', description: 'You are too good' });
    showError({ title: 'Good', description: 'You are too good' });
    mutation.mutate(data);
  };

  return { signupFunc, data, error, isLoading };
};

export default useSignup;
