export type SignupInputs = {
  fullName: string;
  email: string;
  password: string;
  referal: string;
};

export type SignupInputError = {
  fullNameError?: string;
  emailError?: string;
  passwordError?: string;
  referalError?: string;
};
