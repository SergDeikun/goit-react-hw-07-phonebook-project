import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrap = styled.div`
  display: flex;
  /* align-items: center; */
`;

export const Item = styled.li`
  display: flex;
  /* outline: 1px solid teal; */
  /* height: 56px; */
  width: 100%;

  align-items: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 56px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const Name = styled.p`
  margin-left: 16px;
`;

export const Phone = styled.p`
  margin-left: auto;
  margin-right: 5px;
`;
