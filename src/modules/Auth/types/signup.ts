export type SignupInputs = {
  fullName: string;
  email: string;
  password: string;
};

export type SigninInputs = {
  email: string;
  password: string;
};
export type ForgotInput = {
  email: string;
};
export type NewPasswordInput = {
  password: string;
  Cpassword: string;
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

export type ForgotInputError = {
  emailError?: string;
};
export type NewPasswordInputError = {
  passwordError?: string;
  CpasswordError?: string;
};
