import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const OpenModalBtn = styled.button`
  width: 50px;
  height: 50px;
  align-items: center;
  background-color: #333333;
  color: #ffffff;

  border-radius: 50%;
  padding: 0;
  margin-left: 26px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  border: none;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
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
