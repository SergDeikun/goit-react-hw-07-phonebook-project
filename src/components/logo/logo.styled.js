import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: block;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 26px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin-left: 16px;
`;
