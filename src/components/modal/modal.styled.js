// import { style } from '@mui/system';
import styled from 'styled-components';

export const OpenBtn = styled.button`
  width: 45px;
  height: 45px;
  align-items: center;
  background-color: #ffffff;
  color: #333333;
  border-radius: 50%;
  padding: 0;
  margin-left: 26px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  border: none;
  cursor: pointer;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #0088cc;
  background-color: #ffffff;

  border: none;
`;
