import React, { ChangeEvent, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as EyeOpen } from 'assets/svg/EyeOpen.svg';
import { ReactComponent as Google } from 'assets/svg/Google.svg';
import Button from 'components/Button';
import Input from 'components/Input';

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
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
          <Button text="Google Play" type="light" icon={<Google />} onPress={() => console.log('Okey')} />
          <div className="strike">
            <span>Or</span>
          </div>
          <div className="input-form">
            <Input
              value={message}
              label="Name"
              type="text"
              icon={<EyeOpen />}
              name="FirstName"
              handleChange={handleInputChange}
            />
          </div>
          <Button text="SIGN UP" type="light" onPress={() => console.log('Okey')} />
          <p className="sign-in">
            Already have an Account? <span onClick={() => navigate('/')}>Sign in</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
