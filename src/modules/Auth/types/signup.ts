import { Method } from 'axios';
export type SignupInputs = {
  fullName: string;
  email: string;
  password: string;
  // referal: string;
};

export type SignupInputError = {
  fullNameError?: string;
  emailError?: string;
  passwordError?: string;
  // referalError?: string;
};

export type ApiCallTypes = {
  url: string;
  method?: Method;
  data?: any;
  externalResource?: string;
  passedToken?: string;
};
