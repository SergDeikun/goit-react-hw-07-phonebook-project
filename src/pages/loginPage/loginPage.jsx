import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/userApiSlice/userApiSlice';

import Header from 'components/header/header';
import Logo from 'components/logo/logo';

import {
  WrapLoginForm,
  LoginTitle,
  LoginForm,
  Input,
  LoginBtn,
} from './loginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('zaqwerty@mail.com');
  const [password, setPassword] = useState('zaqwerty123');
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
      console.log('oops');
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
      <WrapLoginForm>
        <LoginForm onSubmit={handleSubmit} autoComplete="off">
          <label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>

          <label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </label>

          <LoginBtn type="submit" onClick={handleSubmit}>
            Login
          </LoginBtn>
        </LoginForm>
      </WrapLoginForm>
    </>
  );
};

export default LoginPage;
