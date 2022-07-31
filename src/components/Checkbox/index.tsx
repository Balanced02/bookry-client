import React from 'react';
import { ChekboxProps } from 'types';
import './styles.scss';

const Checkbox = ({ label, isChecked, className, handleChange }: ChekboxProps) => {
  return (
    <div className={`checkbox-constainer ${className}`}>
      <input className="" type="checkbox" id={label} checked={isChecked} onChange={handleChange} />
      <label htmlFor={label} className="">
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
