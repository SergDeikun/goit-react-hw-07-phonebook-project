import { useParams } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';

import { useGetContactByIdQuery } from 'redux/contactsApiSlice/contactsSlice';
import DeleteButton from 'components/deleteButton/deleteButton';
import {
  WrapPersonInfo,
  BoxContactInfo,
  PhoneBox,
  ContactInfoTitle,
  Phone,
} from './personInfo.styled';

const PersonInfo = () => {
  const { contactId } = useParams();
  const { data, isSuccess } = useGetContactByIdQuery(contactId);
  const styleAvatar = {
    fill: '#008080',
  };
  const stylePhoneIcon = {
    fill: '#5f6368',
  };

  return (
    <>
      {isSuccess && (
        <div>
          <WrapPersonInfo>
            <IoMdContact size="272" style={styleAvatar} />
            <p>{data.name}</p>
            <DeleteButton />
          </WrapPersonInfo>
          <BoxContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <PhoneBox>
              <MdOutlineLocalPhone size="20" style={stylePhoneIcon} />
              <Phone href="tel:{data.phoneNumber}">{data.phoneNumber}</Phone>
            </PhoneBox>
          </BoxContactInfo>
        </div>
      )}
    </>
  );
};

export default PersonInfo;
