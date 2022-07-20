import React, { useState } from 'react';
import { InputType } from 'types';
import './styles.scss';

const Input = ({ value, label, type, name, min, icon, max, error, disabled, onIcon, handleChange }: InputType) => {
  const [inputType, setInputType] = useState<string>(type);

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
            onBlur={inputBlurred}
          />
          <span className="input-lable">{label}</span>
        </label>
        {icon ? (
          <div className="icon" onClick={onIcon}>
            {icon}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
