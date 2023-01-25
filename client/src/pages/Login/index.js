import React, { useState } from 'react';

import Logo from 'assets/logo.svg';

import './index.scss';

const formFields = [
  { type: 'email', name: 'email', placeholder: 'Enter work email' },
  { type: 'password', name: 'password', placeholder: 'Enter password' },
];

const Login = () => {
  const [values, setValues] = useState({
    [formFields[0].name]: '',
    [formFields[1].name]: '',
  });

  const onChangeInput = (e) => {};

  const onSubmitForm = async (e) => {};

  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} className="header__logo" alt="logo" />
        <div className="header-wrapper">
          <span className="title">Joonko's Jobs Manager</span>
          <span className="subtitle">Enter your details</span>
        </div>
        <form className="auth-form" onSubmit={onSubmitForm}>
          {formFields.map(({ type, name, placeholder }) => (
            <input
              key={`form__${name}`}
              type={type}
              name={name}
              placeholder={placeholder}
              value={values[name]}
              onChange={onChangeInput}
            />
          ))}
          <button type="submit">Log in</button>
        </form>
        <span className="error-msg"></span>
      </div>
    </div>
  );
};

export default Login;
