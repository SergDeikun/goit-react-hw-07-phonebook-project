import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  useAddContactMutation,
  // useGetContactsQuery,
} from '../../redux/contactsApiSlice/contactsSlice';
import SaveButton from 'components/saveButton/saveButton';

import { Input, Form, InputsWrap, PhoneWrap } from './newContactCard.styled';

const NewContactCard = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();
  // const { isFetching, isSuccess } = useGetContactsQuery();
  const [addContactt] = useAddContactMutation();
  // const notify = () => toast.success('Contact saved!');

  const style = {
    fill: '#5f6368',
    opacity: '20%',
  };

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

    try {
      await addContactt({
        name: e.target.name.value,
        phoneNumber: e.target.number.value,
      });

      navigate('/');
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <ToastContainer /> */}

      <IoMdContact size="272" style={style} />
      <SaveButton title="Save"></SaveButton>
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
              value={name}
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
              value={number}
              onChange={handleChange}
              placeholder="Number"
            />
          </label>
        </PhoneWrap>
      </InputsWrap>
    </Form>
  );
};

export default NewContactCard;
