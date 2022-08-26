import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 10px;
`;
export const InputsWrap = styled.div`
  /* padding-left: 30px; */
`;
export const SaveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 36px;
  min-width: 64px;
  padding: 0px 24px 0px 24px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 20px;
  background-color: #0088cc;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
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
