import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/userApiSlice/userApiSlice';

import Header from 'components/header/header';
import Logo from 'components/logo/logo';

import {
  InputName,
  LoginTitle,
  LoginForm,
  Input,
  LoginBtn,
} from './loginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      await login({ email, password });
      navigate('/contacts');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header>
        <Logo />
        <LoginTitle>Please, enter your login</LoginTitle>
      </Header>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          <InputName>Email</InputName>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <InputName>Password</InputName>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <LoginBtn type="submit" onClick={handleSubmit}>
          Login
        </LoginBtn>
      </LoginForm>
      {/* </WrapLoginForm> */}
    </>
  );
};

export default LoginPage;
