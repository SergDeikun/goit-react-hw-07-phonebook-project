import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 10px;
`;
export const InputsWrap = styled.div`
  padding-left: 30px;
`;

export const Input = styled.input`
  width: 553px;
  height: 24px;
  display: block;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  outline: none;

  border-left-style: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-color: #202124;

  &:focus {
    border-bottom-color: blue;
  }
`;

export const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonSubmit = styled.button`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: rgb(113, 113, 238);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
  }
`;
