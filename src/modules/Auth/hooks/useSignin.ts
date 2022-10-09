import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useApi } from 'utils/useApi';
import { useAlert } from '../../../hooks';
import { SigninInputs, UserType } from 'modules/Auth/types';
import AuthContext from '../context/AuthContext';
import { SET_USER } from '../context/types';
import { useLocation, useNavigate } from 'react-router';

type SignInResponseT = {
  token: string;
  data: UserType;
};

export const useSignIn = () => {
  const { callApi } = useApi();
  const { showSuccess, showError } = useAlert();
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const { state } = useLocation();

  const mutation = useMutation(
    async (user: SigninInputs) => callApi({ url: '/auth/login', data: user, method: 'POST' }),
    {
      onSuccess: async (data: SignInResponseT) => {
        dispatch({
          type: SET_USER,
          payload: {
            token: data.token,
            user: data.data,
          },
        });
        showSuccess({ title: 'Login Successful!', description: 'Verify you account' });
        navigate(state ? state : '/app');
      },
      onError: async (error: AxiosError) => {
        // TODO: dispatch all neccesary data
        showError({ title: 'Login Error', description: 'Invalid credentials' });
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
