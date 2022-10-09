import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { SignupInputs } from 'modules/Auth/types';

export const useSignup = () => {
  const { callApi } = useApi();
  const navigate = useNavigate();
  const { showSuccess, showError } = useAlert();
  const mutation = useMutation(
    async (user: SignupInputs) => callApi({ url: '/auth/register', data: user, method: 'POST' }),
    {
      onSuccess: async (res) => {
        // TODO: dispatch all neccesary data
        console.log('res', res);
        showSuccess({ title: 'Signup Successful!', description: 'Verify you account' });
        navigate('/signin');
      },
      onError: async (error: AxiosError) => {
        // TODO: dispatch all neccesary data
        console.log('registerError', error);
        // TODO: Read and format error message;
        showError({ title: 'Registration Error', description: 'Email already exists' });
        // if (error.response?.data.message === 'email_exist') {
        //   showError({ title: 'Signup Error', description: 'Email already exist you dummy' });
        // }
        // if (error.response?.data.message === 'email_invalid') {
        //   showError({ title: 'Signup Error', description: 'Email is invalid you dummy' });
        // }
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
