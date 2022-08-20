import { useParams } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useGetContactByIdQuery } from 'redux/contactsApiSlice/contactsSlice';
import DeleteButton from 'components/deleteButton/deleteButton';
import Spinner from '../spinner/spinner';

import {
  WrapPersonInfo,
  BoxContactInfo,
  PhoneBox,
  ContactInfoTitle,
  Phone,
} from './personInfo.styled';

const PersonInfo = () => {
  const { contactId } = useParams();
  const { data, isSuccess, isFetching } = useGetContactByIdQuery(contactId);
  // const notify = () => toast.success('Contact deleted!');

  const styleAvatarIcon = {
    fill: '#008080',
  };
  const stylePhoneIcon = {
    fill: '#5f6368',
  };

  return (
    <>
      {isFetching && <Spinner />}
      {isSuccess && (
        <div>
          {/* <ToastContainer /> */}

          <WrapPersonInfo>
            <IoMdContact size="272" style={styleAvatarIcon} />
            <p>{data.name}</p>
            <DeleteButton title="Delete" />
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
