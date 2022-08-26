import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SaveButton from 'components/saveButton/saveButton';

import {
  useGetContactsQuery,
  useUpdateContactByIdMutation,
} from 'redux/contactsApiSlice/contactsApiSlice';
// import DeleteButton from 'components/deleteButton/deleteButton';
// import Spinner from '../spinner/spinner';
// import BackgroundLetterAvatars from '../avatar/avatar';

// import {
//   WrapPersonInfo,
//   BoxContactInfo,
//   Name,
//   PhoneBox,
//   ContactInfoTitle,
//   Phone,
// } from './personInfo.styled';
import {
  Input,
  Form,
  InputsWrap,
  PhoneWrap,
} from '../newContactCard/newContactCard.styled';

const PersonInfo = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [updateContact] = useUpdateContactByIdMutation();
  const { data } = useGetContactsQuery();
  // console.log(data);
  const contact = data.find(contact => contact.id === contactId);

  // const styleAvatarIcon = {
  //   fill: '#008080',
  // };
  // const stylePhoneIcon = {
  //   fill: '#5f6368',
  // };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value.toLowerCase());
        break;

      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateContact(contactId, { name, number });
    navigate('/contacts');
  };

  return (
    <>
      {data && (
        <Form onSubmit={handleSubmit}>
          {/* <ToastContainer position="top-left" autoClose={3000} /> */}
          {/* {isSuccess && <BasicAlerts />} */}
          {/* <Alert /> */}
          {/* <BasicAlerts /> */}

          {/* <IoMdContact size="272" style={style} /> */}
          {/* <SaveButton title="Save"></SaveButton> */}
          <InputsWrap>
            <PhoneWrap>
              <FaRegUser size="20" />
              <label>
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={contact.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </label>
            </PhoneWrap>

            <PhoneWrap>
              <MdOutlineLocalPhone size="20" />
              <label>
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={contact.number}
                  onChange={handleChange}
                  placeholder="Number"
                />
              </label>
            </PhoneWrap>
          </InputsWrap>
        </Form>
      )}
    </>
  );

  // return (
  //   <>
  //     {/* {isFetching && <Spinner />} */}
  //     {data && (
  //       <>
  //         {/* <ToastContainer /> */}

  //         <WrapPersonInfo>
  //           {/* <BackgroundLetterAvatars name={data.name} /> */}

  //           <IoMdContact size="272" style={styleAvatarIcon} />
  //           <Name>{name}</Name>
  //           <DeleteButton title="Delete" />
  //         </WrapPersonInfo>
  //         <BoxContactInfo>
  //           <ContactInfoTitle>Contact Information</ContactInfoTitle>
  //           <PhoneBox>
  //             <MdOutlineLocalPhone size="20" style={stylePhoneIcon} />
  //             <Phone href="tel:{data.phoneNumber}">{number}</Phone>
  //           </PhoneBox>
  //         </BoxContactInfo>
  //       </>
  //     )}
  //   </>
  // );
};

export default PersonInfo;
