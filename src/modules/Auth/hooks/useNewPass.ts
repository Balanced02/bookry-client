import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { NewPasswordInput } from 'modules/Auth/types';

export const useNewPass = () => {
  const { callApi } = useApi();
  const { showSuccess, showError } = useAlert();
  const mutation = useMutation(
    async (user: NewPasswordInput) => callApi({ url: '/auth/login', data: user, method: 'POST' }),
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
  const newPassFunc = (data: NewPasswordInput) => {
    mutation.mutate(data);
  };

  return { newPassFunc, data, error, isLoading };
};

export default useNewPass;
