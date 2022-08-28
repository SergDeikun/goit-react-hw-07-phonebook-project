import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  width: 500px;
  height: 45px;

  align-items: center;
  text-align: center;
  margin-left: 100px;
  border-radius: 10px;
  background-color: rgb(241, 243, 244);
`;

export const FilterInput = styled.input`
  width: 100%;
  border-radius: 10px;
  background-color: rgb(241, 243, 244);
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 27px;
  text-decoration: none solid rgb(0, 0, 0);
  outline: none;
  text-align: start;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
