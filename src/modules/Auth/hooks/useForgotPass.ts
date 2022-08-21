import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { ForgotInput } from 'modules/Auth/types';

export const useForgotPass = () => {
  const { callApi } = useApi();
  const { showSuccess, showError } = useAlert();
  const mutation = useMutation(
    async (user: ForgotInput) => callApi({ url: '/auth/login', data: user, method: 'POST' }),
    {
      onSuccess: async (res) => {
        // TODO: dispatch all neccesary data
        console.log('loginRes', res);
        // showSuccess({ title: 'Login Successful!', description: 'Verify you account' });
      },
      onError: async (error: AxiosError) => {
        // TODO: dispatch all neccesary data
        console.log('loginError', error.response);
        showError({ title: 'Login Error', description: 'Invalid credentials' });
      },
    },
  );

  const { isLoading, error, data } = mutation;
  // TODO: Get this from context
  const forgotPassFunc = (data: ForgotInput) => {
    // mutation.mutate(data);
    console.log('ForgotInput', data);
  };

  return { forgotPassFunc, data, error, isLoading };
};

export default useForgotPass;
