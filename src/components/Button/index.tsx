import React, { useState } from 'react';
import { ButtonProps } from 'types';
import './styles.scss';

const Button = ({ text, onPress, type, loading, disabled }: ButtonProps) => {
  const [shake, setShake] = useState<boolean>(false);
  const shakeTimer = () => {
    setShake(!shake);
    const toggle = setTimeout(() => setShake(false), 1000);
    return () => {
      clearTimeout(toggle);
    };
  };
  return (
    <div
      className={`button-container ${type && type}-bg ${shake ? 'shake' : null}`}
      onClick={() => {
        onPress();
        shakeTimer();
      }}
    >
      <p className={`text-style ${type && type}-text`}>{text}</p>
    </div>
  );
};

export default Button;
