import { Reducer, useEffect, useReducer } from 'react';
import { AuthContextState, AuthActionType } from 'modules/Auth/types';
import { SET_USER, LOG_OUT } from './types';

const initialState: AuthContextState = {
  token: '',
  user: {
    fullName: '',
    email: '',
    avatarUrl: '',
    isEmailVerified: false,
  },
  pageReady: false,
};

export function authReducer(state: AuthContextState, action: AuthActionType) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        pageReady: true,
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
    if (state.token) {
      localStorage.setItem('@auth', JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    try {
      const store = localStorage.getItem('@auth');
      let data = initialState;
      if (store) {
        data = JSON.parse(store);
      }
      dispatch({ type: SET_USER, payload: data });
    } catch (error) {
      dispatch({ type: SET_USER, payload: initialState });
    }
  }, []);

  return { state, dispatch };
};

export default useAuthController;
