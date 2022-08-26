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

  /* &:focus {
    opacity: 1;
    box-shadow: rgba(65, 69, 73, 0.3) 0px 1px 1px 0px,
      rgba(65, 69, 73, 0.15) 0px 1px 3px 1px;
  } */
`;

export const SearchBtn = styled.button`
  display: blok;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  padding: 8px;
  margin: 3px;

  &:hover {
    opacity: 1;
    box-shadow: rgba(65, 69, 73, 0.3) 0px 1px 1px 0px,
      rgba(65, 69, 73, 0.15) 0px 1px 3px 1px;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  /* height: 46px; */
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
