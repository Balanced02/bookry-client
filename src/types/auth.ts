import { Dispatch } from 'react';

export type AuthContextState = {
  fullName: string;
  email: string;
  token: string;
  avatarUrl: string;
};

export type AuthActionType = { type: string; payload: AuthContextState };

export type AuthContext = {
  state: AuthContextState;
  dispatch: Dispatch<AuthActionType>;
};