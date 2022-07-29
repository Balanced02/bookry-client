import { useMutation } from '@tanstack/react-query';
import { useApi } from 'utils/useApi';
import { SignupInputs } from 'types';
import apiService from 'services/apiService';

export const useSignup = () => {
  const mutation = useMutation((user) => apiService.signup(user), {
    onSuccess: async (res) => {
      // TODO: dispatch all neccesary data
    },
  });

  // const {isLoading, error, data} = mutation;
  // TODO: Get this from context
  const signupFunc = (data: SignupInputs) => {
    mutation.mutate(data);
  };

  return { signupFunc };
};

export default useSignup;
