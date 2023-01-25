import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import './index.scss';
import axios from 'axios';

const formFields = [
  { type: 'email', name: 'email', placeholder: 'Enter work email' },
  { type: 'password', name: 'password', placeholder: 'Enter password' },
];

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    [formFields[0].name]: '',
    [formFields[1].name]: '',
  });
  const [error, setError] = useState(null);

  const onChangeInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await axios.post('/users/login', values);
      if (data.error) {
        throw new Error(data.error);
      }
      history.push('/jobs');
    } catch (error) {
      switch (error.response.status) {
        case 401:
        case 404:
          setError(
            'An error occurred, please check your credentials and try again.'
          );
          break;
        default:
          setError('An unknown error occurred, please try again later.');
          break;
      }
    }
  };

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
        {/* TODO: prevent jump when displaying/hiding error message */}
        <span className="error-msg">{error}</span>
      </div>
    </div>
  );
};

export default Login;
