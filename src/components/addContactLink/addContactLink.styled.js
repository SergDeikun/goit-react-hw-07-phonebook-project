import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AddNewContactLink = styled(Link)`
  display: flex;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* align-items: baseline; */
  height: 44px;
  width: 160px;
  margin-left: 100px;

  color: blue;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  padding-top: 2px;
  padding-right: 24px;
  padding-bottom: 2px;
  padding-left: 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25px;

  &:hover {
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
  }
`;
