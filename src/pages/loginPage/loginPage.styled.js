import styled from 'styled-components';

export const WrapLoginForm = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 200px;
  margin-top: 100px;

  text-align: center;
`;

// export const RegisterTitle = styled.h1`
//   text-align: center;
//   font-size: 36px;
//   font-weight: 700;
//   line-height: 46px;
// `;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #8c8c8c;
  outline: none;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 46px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: border-color 250ms;

  &:focus {
    border-color: #0088cc;
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  border-radius: 8px;
  background-color: #c7c7c7;
  color: #fff;
  border: none;
  height: 48px;
  width: 300px;
  padding: 13px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: background-color 250ms;
  &:hover {
    background-color: #0088cc;
  }
`;

// export const Input = styled.input`
//   width: 300px;
//   height: 40px;
//   /* padding: 1em; */
//   border: none;
//   border-radius: 8px;

//   outline: 2px solid transparent;
//   background-image: linear-gradient(to bottom, #0088cc 1px, transparent 1px),
//     linear-gradient(to bottom, #0088cc 1px, transparent 1px),
//     linear-gradient(
//       to right,
//       #0088cc 1px,
//       transparent 1px,
//       transparent calc(100% - 1px),
//       #0088cc calc(100% - 1px)
//     ),
//     linear-gradient(to top, #cacaca 1px, transparent 1px);
//   background-position: -100% 0%, 200% 0%, 0% 100%, 0% 100%;
//   background-size: 50% 100%, 50% 100%, 100% 1px, 100% 100%;
//   background-repeat: no-repeat;
//   transition: background-size 0.4s ease-out 0.6s,
//     background-position 0.6s ease-in;

//   &:focus {
//     border-radius: 8px;

//     background-position: 0% 0%, 100% 0%, 0% 100%, 0% 100%;
//     background-size: 51% 100%, 51% 100%, 100% 100%, 100% 100%;
//     transition: background-size 0.4s ease-in,
//       background-position 0.6s ease-out 0.4s;
//   }
// `;
