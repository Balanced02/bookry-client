import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as EyeClose } from 'assets/svg/EyeClose.svg';
import { ReactComponent as EyeOpen } from 'assets/svg/EyeOpen.svg';
import { ReactComponent as Google } from 'assets/svg/Google.svg';
import Button from 'components/Button';
import Input from 'components/Input';
import { SigninInputs, SigninInputError } from 'modules/Auth/types';
import { useSignIn } from '../hooks';
import NoteCard from '../components/NoteCard';
import CardDeck from '../components/CardDeck';
import './styles.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const { signinFunc } = useSignIn();
  const [isHidden, setIsHidden] = useState<string>('password');
  const [formValues, setFormValues] = useState<SigninInputs>({
    email: '',
    password: '',
    // referal: '',
  });
  const [formErrors, setFormErrors] = useState<SigninInputError>({
    emailError: '',
    passwordError: '',
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

  const handleSignup = () => {
    const newError: SigninInputError = {};
    let key: keyof typeof formValues;
    let formErrorName: keyof typeof newError;
    for (key in formValues) {
      if (!formValues[key]) {
        formErrorName = `${key}Error`;
        newError[formErrorName] = 'Please provide a value';
      }
    }
    setFormErrors(newError);
    if (!Object.keys(newError).length) {
      const formData = {
        email: formValues.email,
        password: formValues.password,
      };
      // TODO: Call endpoint
      signinFunc(formData);
    }
  };

  const handlePasswordVisibility = () => {
    if (isHidden === 'password') {
      setIsHidden('text');
      return;
    }
    setIsHidden('password');
  };

  return (
    <div className="login-constainer">
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
          <div className="login-form">
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
                  value={formValues.password}
                  label="Password"
                  type={isHidden}
                  name="password"
                  icon={isHidden === 'password' ? <EyeClose /> : <EyeOpen />}
                  handleChange={handleInputChange}
                  error={formErrors.passwordError}
                  onIcon={handlePasswordVisibility}
                />
              </div>
            </div>
            <Button text="SIGN IN" className="signup-button" type="light" onPress={handleSignup} />
            <p className="forgot-password">
              <span onClick={() => navigate('/signin')}>Forgot Password?</span>
            </p>
            <p className="sign-in">
              {`Don't`} have an Account? <span onClick={() => navigate('/signup')}> Sign Up</span>
            </p>
            <div className="signin-footer">
              <p className="chat">
                Trouble signing in? <span onClick={() => navigate('/signin')}>Chat with us</span>
              </p>
              <p className="privacy">
                <span onClick={() => navigate('/signin')}>Privacy</span> |{' '}
                <span onClick={() => navigate('/signin')}>Terms</span>
              </p>
            </div>
          </div>
        </CardDeck>
      </main>
    </div>
  );
};

export default SignIn;
