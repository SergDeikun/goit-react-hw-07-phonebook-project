import styled from 'styled-components';

export const RegisterTitle = styled.h1`
  margin-left: 427px;
  margin-right: auto;
  color: #333333;
  font-size: 26px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const UserRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

export const InputName = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  color: #8c8c8c;
`;

export const Input = styled.input`
  width: 100%;
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
