import React, { useState } from 'react';
import { ReactComponent as EyeOpen } from 'assets/svg/EyeOpen.svg';
import './styles.scss';

export type InputType = {
  value: string | number;
  label: string;
  type: string;
  name: string;
  error?: string;
  max?: number;
  min?: number;
  disabled?: boolean;
  showOnInput?: boolean;
  handleChange: (event: { target: { value: React.SetStateAction<string> } }) => void;
};

const Input = ({ value, label, type, name, min, max, error, disabled, showOnInput, handleChange }: InputType) => {
  const [inputType, setInputType] = useState<string>(type);

  const inputFocused = () => {
    if (type === 'password' && showOnInput) {
      setInputType('text');
    }
  };

  const inputBlurred = () => {
    if (type === 'password') {
      setInputType(type);
    }
  };
  return (
    <div className="input-container">
      <div className="input-holder">
        <label className="input-label">
          <input
            type={inputType}
            name={name}
            className={`input ${error ? 'error' : ''}`}
            placeholder=" "
            autoComplete="off"
            value={value}
            max={max}
            min={min}
            disabled={disabled}
            onChange={handleChange}
            onFocus={inputFocused}
            onBlur={inputBlurred}
          />
          <span className="input-lable">{label}</span>
        </label>
        {showOnInput ? <div className="icon">{showOnInput ? <EyeOpen /> : null}</div> : null}
      </div>
    </div>
  );
};

export default Input;
