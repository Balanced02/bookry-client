import React, { useState, useRef, useEffect } from 'react';
import { ButtonProps } from 'types';
import './styles.scss';

const Button = ({ text, onPress, type, icon, loading, disabled }: ButtonProps) => {
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [shake, setShake] = useState<boolean>(false);

  const shakeTimer = () => {
    setShake(!shake);
    timerRef.current = setTimeout(() => setShake(false), 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    stopTimer();
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
