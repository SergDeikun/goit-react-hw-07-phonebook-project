import styled from 'styled-components';

export const WrapForm = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 300px;
  text-align: center;
`;

export const RegisterTitle = styled.h1`
  color: #333333;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 46px;
`;

export const UserRegisterForm = styled.form`
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

export const SubmitBtn = styled.button`
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
