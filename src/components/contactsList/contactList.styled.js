import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonDelete = styled.button`
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  background-color: rgb(113, 113, 238);
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
  }
`;
