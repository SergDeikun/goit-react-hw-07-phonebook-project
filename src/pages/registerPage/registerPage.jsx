import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/userApiSlice/userApiSlice';
import Header from 'components/header/header';
import Logo from 'components/logo/logo';

import {
  // WrapForm,
  RegisterTitle,
  UserRegisterForm,
  InputName,
  Input,
  SubmitBtn,
} from './registerPage.styled';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();

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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      registerUser({ name, email, password });
      setName('');
      setEmail('');
      setPassword('');
      navigate('/users/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header>
        <Logo />
        <RegisterTitle>Please, create an account</RegisterTitle>
      </Header>
      <UserRegisterForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          <InputName>Name</InputName>
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

        <SubmitBtn type="submit">Create account</SubmitBtn>
      </UserRegisterForm>
    </>
  );
};

export default RegisterPage;
