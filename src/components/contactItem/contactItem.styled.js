import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrap = styled.div`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  width: 100%;
  height: 56px;

  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ItemLink = styled(Link)`
  align-items: center;

  display: flex;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: black;
  cursor: pointer;
`;

export const Name = styled.p`
  text-align: start;
  width: 200px;
  margin-left: 16px;
`;

export const Phone = styled.p`
  text-align: start;
  width: 600px;
  margin-left: 300px;
`;

export const DeleteBtn = styled.button`
  margin-right: 10px;
  border: none;
  background-color: #f5f5f5;
`;
