import { Reducer, useEffect, useReducer } from 'react';
import { AuthContextState, AuthActionType } from 'types';
import { FETCH_ACCOUNT, LOG_OUT } from './types';

const initialState: AuthContextState = {
  fullName: '',
  email: '',
  token: '',
  avatarUrl: '',
};

export function authReducer(state: AuthContextState, action: AuthActionType) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ACCOUNT:
      return {
        ...state,
        fullName: payload.fullName,
        email: payload.email,
        token: payload.token,
        avatarUrl: payload.avatarUrl,
      };
    case LOG_OUT:
      localStorage.setItem('@auth', JSON.stringify(initialState));
      return {
        ...state,
        fullName: '',
        email: '',
        token: '',
        avatarUrl: '',
      };
    default:
      return state;
  }
}

const useAuthController = () => {
  const [state, dispatch] = useReducer<Reducer<AuthContextState, AuthActionType>>(authReducer, initialState);

  useEffect(() => {
    if (state.email) {
      localStorage.setItem('@auth', JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const store = localStorage.getItem('@auth');
    if (store) {
      dispatch({ type: FETCH_ACCOUNT, payload: JSON.parse(store) });
    }
  }, []);

  return { state, dispatch };
};

export default useAuthController;