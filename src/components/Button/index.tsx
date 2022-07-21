import React, { useState, useRef, useEffect } from 'react';
import { ButtonProps } from 'types';
import './styles.scss';

const Button = ({ text, onPress, type, icon, loading, disabled }: ButtonProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [shake, setShake] = useState<boolean>(false);

  const shakeTimer = () => {
    setShake(!shake);
    timerRef.current = setTimeout(() => setShake(false), 1000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <button
      className={`button-container ${type && type}-bg ${shake ? 'shake' : null}}`}
      onClick={() => {
        onPress();
        shakeTimer();
      }}
      disabled={loading || disabled}
    >
      {icon && icon}
      {text && <p className={`text-style ${type && type}-text`}>{text}</p>}
    </button>
  );
};

export default Button;
