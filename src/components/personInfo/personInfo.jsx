import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';

import Header from 'components/header/header';
import UserMenu from 'components/userMenu/userMenu';

import {
  WrapPersonInfo,
  BoxContactInfo,
  Name,
  PhoneBox,
  ContactInfoTitle,
  Phone,
} from './personInfo.styled';

const PersonInfo = () => {
  const contacts = useSelector(state => state.contacts.items);
  const { contactId } = useParams();

  const contact = contacts.find(contact => contact.id === contactId);

  const styleAvatarIcon = {
    fill: '#008080',
  };
  const stylePhoneIcon = {
    fill: '#5f6368',
  };

  return (
    <>
      {contacts && (
        <>
          <Header>
            <UserMenu />
          </Header>
          <WrapPersonInfo>
            <IoMdContact size="272" style={styleAvatarIcon} />
            <Name>{contact.name}</Name>
          </WrapPersonInfo>
          <BoxContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <PhoneBox>
              <MdOutlineLocalPhone size="20" style={stylePhoneIcon} />
              <Phone href="tel:{data.phoneNumber}">{contact.number}</Phone>
            </PhoneBox>
          </BoxContactInfo>
        </>
      )}
    </>
  );
};

export default PersonInfo;
