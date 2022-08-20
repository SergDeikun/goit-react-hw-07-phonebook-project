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
  background-color: blue;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #174ea6;

    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
  }
`;
