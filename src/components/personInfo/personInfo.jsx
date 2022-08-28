import { useParams } from 'react-router-dom';

import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';

import { useGetContactsQuery } from 'redux/contactsApiSlice/contactsApiSlice';

import {
  WrapPersonInfo,
  BoxContactInfo,
  Name,
  PhoneBox,
  ContactInfoTitle,
  Phone,
} from './personInfo.styled';

const PersonInfo = () => {
  const { contactId } = useParams();

  const { data } = useGetContactsQuery();
  const contact = data.find(contact => contact.id === contactId);

  const styleAvatarIcon = {
    fill: '#008080',
  };
  const stylePhoneIcon = {
    fill: '#5f6368',
  };

  return (
    <>
      {data && (
        <>
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
