import styled from 'styled-components';

export const SaveBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
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
