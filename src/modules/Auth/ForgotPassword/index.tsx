import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as KeyLock } from 'assets/svg/KeyLock.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { useForgotPass } from '../hooks';
import { ForgotInput, ForgotInputError } from 'modules/Auth/types';
import NoteCard from '../components/NoteCard';
import CardDeck from '../components/CardDeck';
import './styles.scss';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgotPassFunc } = useForgotPass();
  const [formValues, setFormValues] = useState<ForgotInput>({
    email: '',
  });

  const [formErrors, setFormErrors] = useState<ForgotInputError>({
    emailError: '',
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
    const newError: ForgotInputError = {};
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
      };
      // TODO: Call endpoint
      forgotPassFunc(formData);
    }
  };
  return (
    <div className="forgot-password-constainer">
      <main className="notecard">
        <NoteCard
          icon={<Register />}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.'
          }
        />
      </main>
      <main className="">
        <CardDeck>
          <div className="email-form">
            <div className="lock-card">
              <KeyLock />
              <h4 className="heading">Forgot your password?</h4>
              <p className="text">
                Enter your registered email below <br /> to receive password reset Code
              </p>
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
            </div>
            <Button text="GET CODE" className="get-code" type="light" onPress={handleSignup} />
            <p className="sign-in">
              Remeber password? <span onClick={() => navigate('/signin')}> Login</span>
            </p>
          </div>
        </CardDeck>
      </main>
    </div>
  );
};

export default ForgetPassword;
