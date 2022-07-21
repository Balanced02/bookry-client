import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as EyeOpen } from 'assets/svg/EyeOpen.svg';
import { ReactComponent as Google } from 'assets/svg/Google.svg';
import Button from 'components/Button';
import Input from 'components/Input';
import { SignupInputs, SignupInputError } from 'types';
import './styles.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const [formValues, setFormValues] = useState<SignupInputs>({
    fullName: '',
    email: '',
    password: '',
    referal: '',
  });
  const [formErrors, setFormErrors] = useState<SignupInputError>({
    fullNameError: '',
    emailError: '',
    passwordError: '',
    referalError: '',
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
  return (
    <div className="signup-constainer">
      <main className="">
        <a className="navbar-brand" onClick={() => navigate('/')}>
          Bookry
        </a>
        <div className="welcome-note">
          <div className="centerDiv">
            <div className="svgIcon">
              <Register />
            </div>
            <div className="head-text">
              <h4 className="welcome">Welcome to</h4>
              <h4 className="bookry">Bookry</h4>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum
              magna dui, porttitor vel diam nec, pellentesque bibendum odio.{' '}
            </p>
          </div>
        </div>
      </main>
      <main className="">
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
              <Input value={formValues.email} label="Email" type="text" name="email" handleChange={handleInputChange} />
            </div>
            <div className="input-layout">
              <Input
                value={formValues.fullName}
                label="Full Name"
                type="text"
                name="fullName"
                handleChange={handleInputChange}
              />
            </div>
            <div className="input-layout">
              <Input
                value={formValues.password}
                label="Password"
                type="text"
                name="password"
                icon={<EyeOpen />}
                handleChange={handleInputChange}
              />
            </div>
            <div className="input-layout">
              <Input
                value={formValues.referal}
                label="Referral Code (If any)"
                type="text"
                name="referal"
                handleChange={handleInputChange}
              />
            </div>
          </div>
          <Button text="SIGN UP" className="signup-button" type="light" onPress={() => console.log('Okey')} />
          <p className="sign-in">
            Already have an Account? <span onClick={() => navigate('/')}>Sign in</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
