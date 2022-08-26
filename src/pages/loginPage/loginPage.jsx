import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/userApiSlice/userApiSlice';

import {
  WrapLoginForm,
  // RegisterTitle,
  LoginForm,
  Input,
  LoginBtn,
} from './loginPage.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login, status] = useLoginMutation();
  const { isLoading } = status;

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

    await login({ email, password });
    navigate('/contacts');
    setEmail('');
    setPassword('');
  };

  return (
    <WrapLoginForm>
      {/* <RegisterTitle>Create an account</RegisterTitle> */}
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

        <LoginBtn type="submit" disabled={isLoading}>
          Login
        </LoginBtn>
      </LoginForm>
    </WrapLoginForm>
  );
};

export default LoginPage;
