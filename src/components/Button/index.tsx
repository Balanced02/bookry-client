import React, { useState } from 'react';
import './styles.scss';

type ButtonProps = {
  text: string;
  onPress: () => void;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
};

const Button = ({ text, onPress, type, loading, disabled }: ButtonProps) => {
  const [shake, setShake] = useState<boolean>(false);
  setTimeout(() => setShake(false), 1000);
  return (
    <div
      className={`button-container ${type && type}-bg ${shake ? 'shake' : null}`}
      onClick={() => {
        onPress();
        setShake(!shake);
      }}
    >
      <p className={`text-style ${type && type}-text`}>{text}</p>
    </div>
  );
};

export default Button;
