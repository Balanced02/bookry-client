import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { ForgotInput } from 'modules/Auth/types';

export const useForgotPass = () => {
  const [state, setState] = useState<ForgotInput>({
    email: '',
  });
  const { callApi } = useApi();
  const navigate = useNavigate();
  const { showSuccess, showError } = useAlert();
  const mutation = useMutation(
    async (user: ForgotInput) => callApi({ url: '/auth/recoverPassword', data: user, method: 'POST' }),
    {
      onSuccess: async (res) => {
        // TODO: dispatch all neccesary data
        navigate('/verifycode', { state: state.email });
        showSuccess({ title: 'Login Successful!', description: 'Verify you account' });
      },
      onError: async (error: AxiosError) => {
        // TODO: dispatch all neccesary data
        showError({ title: 'Login Error', description: 'Invalid credentials' });
      },
    },
  );

  const { isLoading, error, data } = mutation;
  // TODO: Get this from context
  const forgotPassFunc = (data: ForgotInput) => {
    setState({ email: data.email });
    mutation.mutate(data);
  };

  return { forgotPassFunc, data, error, isLoading };
};

export default useForgotPass;
