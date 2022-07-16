import React from 'react';
import './styles.scss';

const Input = () => {
  return (
    <div className="input-container">
      <input type="text" name="name" className="input" placeholder="Search" />
      {/* <label className="input-label">
        Name:
      </label> */}
    </div>
  );
};

export default Input;
