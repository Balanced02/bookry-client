import { Dispatch } from 'react';

export type UserType = {
  fullName: string;
  email: string;
  avatarUrl?: string;
  isEmailVerified: boolean;
  userType?: 'user' | 'reader';
};

export type AuthContextState = {
  user: UserType;
  token: string;
  pageReady?: boolean;
};

export type AuthActionType = { type: string; payload: AuthContextState };

export interface AuthContext extends AuthContextState {
  dispatch: Dispatch<AuthActionType>;
}
