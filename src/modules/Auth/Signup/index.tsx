import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as EyeOpen } from 'assets/svg/EyeOpen.svg';
import { ReactComponent as Google } from 'assets/svg/Google.svg';
import Button from 'components/Button';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import { SignupInputs, SignupInputError } from 'modules/Auth/types';
import './styles.scss';
import useSignup from '../hooks/useSignup';
import NoteCard from '../components/NoteCard';
import CardDeck from '../components/CardDeck';

const Signup = () => {
  const navigate = useNavigate();
  const { signupFunc } = useSignup();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<SignupInputs>({
    fullName: '',
    email: '',
    password: '',
    // referal: '',
  });
  const [formErrors, setFormErrors] = useState<SignupInputError>({
    fullNameError: '',
    emailError: '',
    passwordError: '',
    // referalError: '',
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const formErrorName = `${name}Error`;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevState) => ({
      ...prevState,
      [formErrorName]: '',
    }));
  };

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  const handleSignup = () => {
    const newError: SignupInputError = {};
    let key: keyof typeof formValues;
    let formErrorName: keyof typeof newError;
    for (key in formValues) {
      if (!formValues[key]) {
        formErrorName = `${key}Error`;
        newError[formErrorName] = 'Please provide a value';
      }
    }
    setFormErrors(newError);
    if (isChecked === false) {
      // TODO: Call error toast function
      return;
    }
    if (!Object.keys(newError).length) {
      const formData = {
        fullName: formValues.fullName,
        email: formValues.email,
        password: formValues.password,
        // referal: formValues.referal,
      };
      // TODO: Call endpoint
      signupFunc(formData);
    }
  };
  return (
    <div className="signup-constainer">
      <main className="">
        <NoteCard
          icon={<Register />}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.'
          }
        />
      </main>
      <main className="">
        <CardDeck>
          <div className="signup-form">
            <Button
              text="Google Play"
              type="light"
              icon={<Google />}
              onPress={() => console.log('Okey')}
              className="google-button"
            />
            <div className="strike">
              <span>Or</span>
            </div>
            <div className="input-form">
              <div className="input-layout">
                <Input
                  value={formValues.email}
                  label="Email"
                  type="text"
                  name="email"
                  handleChange={handleInputChange}
                  error={formErrors.emailError}
                />
              </div>
              <div className="input-layout">
                <Input
                  value={formValues.fullName}
                  label="Full Name"
                  type="text"
                  name="fullName"
                  handleChange={handleInputChange}
                  error={formErrors.fullNameError}
                />
              </div>
              <div className="input-layout">
                <Input
                  value={formValues.password}
                  label="Password"
                  type="password"
                  name="password"
                  icon={<EyeOpen />}
                  handleChange={handleInputChange}
                  error={formErrors.passwordError}
                />
              </div>
              {/* <div className="input-layout">
              <Input
                value={formValues.referal}
                label="Referral Code (If any)"
                type="text"
                name="referal"
                handleChange={handleInputChange}
                error={formErrors.referalError}
              />
            </div> */}
              <div className="check-row">
                <Checkbox
                  label="I agree to the"
                  className={isChecked ? '' : 'check-error'}
                  isChecked={isChecked}
                  handleChange={handleCheckChange}
                />
                <span>Terms of Services</span>
              </div>
            </div>
            <Button text="SIGN UP" className="signup-button" type="light" onPress={handleSignup} />
            <p className="sign-in">
              Already have an Account? <span onClick={() => navigate('/')}>Sign in</span>
            </p>
          </div>
        </CardDeck>
      </main>
    </div>
  );
};

export default Signup;
