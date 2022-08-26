import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/userApiSlice/userApiSlice';

import {
  WrapForm,
  RegisterTitle,
  UserRegisterForm,
  Input,
  SubmitBtn,
} from './registerPage.styled';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser, status] = useRegisterUserMutation();
  const { isLoading } = status;

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();

    registerUser({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <WrapForm>
      <RegisterTitle>Create an account</RegisterTitle>
      <UserRegisterForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

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

        <SubmitBtn type="submit" disabled={isLoading}>
          Create account
        </SubmitBtn>
      </UserRegisterForm>
    </WrapForm>
  );
};

export default RegisterPage;
