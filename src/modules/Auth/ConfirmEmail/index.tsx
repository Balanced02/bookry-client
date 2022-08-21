import React, { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as Register } from 'assets/svg/Auth.svg';
import { ReactComponent as Message } from 'assets/svg/Message.svg';
import Button from 'components/Button';
import { useForgotPass, useConfirmPass } from '../hooks';
import NoteCard from '../components/NoteCard';
import CardDeck from '../components/CardDeck';
import './styles.scss';

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { forgotPassFunc } = useForgotPass();
  const { confirmFunc } = useConfirmPass();
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState<string>('');
  const [seconds, setSeconds] = useState<number>(60);
  const [minutes, setMinutes] = useState<number>(4);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value, nextSibling } = event.target;
    setError('');
    if (isNaN(parseInt(value))) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    // if (nextSibling) {
    //   nextSibling
    // }
  };
  console.log('state', state);
  const resendCode = () => {
    const formData = {
      email: 'email',
    };
    forgotPassFunc(formData);
  };

  const handleSubmit = () => {
    if (!otp.join('') || otp.join('').length < 6) {
      setError('Please provide a valid code');
    }
    const formData = {
      code: +otp.join(''),
    };
    // TODO: Call endpoint
    confirmFunc(formData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 1) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(60);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="confirm-email-constainer">
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
              <Message />
              <h4 className="heading">Verify your email</h4>
              <p className="text">
                Please enter the 6 digit code sent to <span>adebalanced04@gmail.com</span>
              </p>
            </div>
            <div className="input-form">
              <div className="input-layout">
                {otp.map((data, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      name="otp"
                      onChange={(event) => handleChange(event, index)}
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                      className={`box-input ${error ? 'error' : ''}`}
                    />
                  );
                })}
              </div>
              <span className="error-text">{error}</span>
            </div>
            <Button text="CONFIRM" className="confirm" type="light" onPress={handleSubmit} />
            <p className="timer">
              {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
            </p>
            <p className="resend-code" onClick={() => resendCode()}>
              Resend Code
            </p>
          </div>
        </CardDeck>
      </main>
    </div>
  );
};

export default ConfirmEmail;
