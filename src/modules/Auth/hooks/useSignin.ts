import { useMutation } from '@tanstack/react-query';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { SigninInputs } from 'modules/Auth/types';

export const useSignIn = () => {
  const { callApi } = useApi();
  const { showSuccess, showError } = useAlert();
  const mutation = useMutation(
    async (user: SigninInputs) => callApi({ url: '/auth/login', data: user, method: 'POST' }),
    {
      onSuccess: async (res) => {
        // TODO: dispatch all neccesary data
        console.log('loginRes', res);
        showSuccess({ title: 'Login Successful!', description: 'You are too good' });
      },
      onError: async (error) => {
        // TODO: dispatch all neccesary data
        console.log('loginError', error);
        showError({ title: 'Login Error', description: "You're a dummy" });
      },
    },
  );

  const { isLoading, error, data } = mutation;
  // TODO: Get this from context
  const signinFunc = (data: SigninInputs) => {
    mutation.mutate(data);
  };

  return { signinFunc, data, error, isLoading };
};

export default useSignIn;
