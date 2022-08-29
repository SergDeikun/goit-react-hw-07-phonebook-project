import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const OpenModalBtn = styled.button`
  background-color: #f5f5f5;
  border: none;
`;

export const Input = styled.input`
  width: 334px;
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
    border-bottom-color: #0088cc;
  }
`;

export const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #0088cc;
  background-color: #ffffff;

  border: none;
`;
