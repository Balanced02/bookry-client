export type SignupInputs = {
  fullName: string;
  email: string;
  password: string;
};

export type SigninInputs = {
  email: string;
  password: string;
};

export type SignupInputError = {
  fullNameError?: string;
  emailError?: string;
  passwordError?: string;
};

export type SigninInputError = {
  emailError?: string;
  passwordError?: string;
};
