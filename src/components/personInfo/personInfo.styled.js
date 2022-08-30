import styled from 'styled-components';

export const WrapPersonInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
`;

export const Name = styled.p`
  margin-left: 10px;
`;

export const BoxContactInfo = styled.div`
  width: 520px;
  height: 200px;
  margin-top: 16px;
  margin-left: 45px;
  padding-top: 16px;
  padding-left: 7px;
  padding-right: 7px;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
`;

export const ContactInfoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.3px;
  line-height: 20px;
`;

export const PhoneBox = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

export const Phone = styled.a`
  margin-left: 10px;
  color: #2962ff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;

  &:hover {
    color: #174ea6;
  }
`;
