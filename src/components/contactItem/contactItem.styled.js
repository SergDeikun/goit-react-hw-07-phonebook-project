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
  /* justify-content: space-between; */

  display: flex;
  width: 100%;
  /* height: 56px; */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  letter-spacing: 0.2px;
  /* text-decoration: none; */
  color: black;
  cursor: pointer;
`;
export const BoxName = styled.div`
  text-align: start;
  width: 100px;
  /* margin-left: auto; */
`;

export const Name = styled.p`
  margin-left: 16px;
`;

export const Phone = styled.p`
  text-align: start;

  margin-left: 300px;
  margin-right: 5px;
`;
