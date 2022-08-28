import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/userApiSlice/userApiSlice';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

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

    await login({ email, password });
    navigate('/contacts');
    setEmail('');
    setPassword('');
  };

  return (
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

        {/* <LoginBtn type="submit" disabled={isLoading} onClick={handleSubmit}> */}
        <LoginBtn type="submit" onClick={handleSubmit}>
          Login
        </LoginBtn>
      </LoginForm>
    </WrapLoginForm>
  );
};

export default LoginPage;

// {
//   /* <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '35ch' },
//         }}
//         // noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           variant="outlined"
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Password"
//           variant="outlined"
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//         />
//         <LoginBtn type="submit" onClick={handleSubmit}>
//           Login
//         </LoginBtn>
//       </Box> */
// }
