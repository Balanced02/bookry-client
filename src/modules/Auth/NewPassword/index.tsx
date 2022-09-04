import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as KeyLock } from 'assets/svg/KeyLock.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { useNewPass } from '../hooks';
import { ReactComponent as EyeClose } from 'assets/svg/EyeClose.svg';
import { ReactComponent as EyeOpen } from 'assets/svg/EyeOpen.svg';
import { NewPasswordInput, NewPasswordInputError } from 'modules/Auth/types';
import NoteCard from '../components/NoteCard';
import CardDeck from '../components/CardDeck';
import './styles.scss';

const NewPassword = () => {
  const navigate = useNavigate();
  const { newPassFunc } = useNewPass();
  const [formValues, setFormValues] = useState<NewPasswordInput>({
    password: '',
    Cpassword: '',
  });
  const [formErrors, setFormErrors] = useState<NewPasswordInputError>({
    passwordError: '',
    CpasswordError: '',
  });
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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

  const handleConfirm = () => {
    const newError: NewPasswordInputError = {};
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
        password: formValues.password,
        Cpassword: formValues.Cpassword,
      };
      // TODO: Call endpoint
      newPassFunc(formData);
    }
  };

  const handlePasswordVisibility = () => {
    setIsHidden((prevShowPassword) => !prevShowPassword);
  };
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <div className="new-password-constainer">
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
              <h4 className="heading">Create New password?</h4>
              <p className="text">Enter a new password</p>
            </div>
            <div className="input-form">
              <div className="input-layout">
                <Input
                  value={formValues.password}
                  label="Password"
                  type={isHidden ? 'text' : 'password'}
                  name="password"
                  icon={isHidden ? <EyeClose /> : <EyeOpen />}
                  handleChange={handleInputChange}
                  onIcon={handlePasswordVisibility}
                  error={formErrors.passwordError}
                />
              </div>
              <div className="input-layout">
                <Input
                  value={formValues.Cpassword}
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  name="Cpassword"
                  icon={showPassword ? <EyeOpen /> : <EyeClose />}
                  handleChange={handleInputChange}
                  onIcon={handleShowPassword}
                  error={formErrors.CpasswordError}
                />
              </div>
            </div>
            <Button text="CONFIRM" className="confirm" type="light" onPress={handleConfirm} />
          </div>
        </CardDeck>
      </main>
    </div>
  );
};

export default NewPassword;
