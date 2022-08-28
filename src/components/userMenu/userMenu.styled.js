import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Text = styled.p`
  margin-right: 5px;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 27px;
  color: #333333;
`;

export const Nik = styled.span`
  color: #333333;
  margin-left: 10px;
  margin-right: 5px;
  font-size: 18px;
`;

export const LogOutBtn = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #ffffff;
  transition: box-shadow 250ms;

  background-color: #333333;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;
