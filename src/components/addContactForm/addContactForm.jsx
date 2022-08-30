import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { createPortal } from 'react-dom';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { IoIosClose } from 'react-icons/io';
import { IoMdContact } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import SaveButton from 'components/saveButton/saveButton';

import {
  Form,
  OpenModalBtn,
  Input,
  PhoneWrap,
  CloseBtn,
} from './addContactForm.styled';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApiSlice/contactsApiSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: '#FFFFFF',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const avatarStyle = {
  fill: '#8C8C8C',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const BtnStyle = {
  bgcolor: '#FFFFFF',
};

// const modalRoot = document.querySelector('#modal-root');

const AddContactForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [open, setOpen] = useState(false);
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.toLowerCase());
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleOpen = () => {
    setOpen(true);
    navigate('/contacts');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      Notify.info(`${name} is already in contacts`);
      reset();
      setOpen(false);

      return;
    }

    try {
      await addContact({ name, number });
      setOpen(false);
      Notify.success(`Сontact added`);
    } catch (error) {
      console.log(error);
    }

    reset();
    handleClose();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <OpenModalBtn onClick={handleOpen} sx={BtnStyle}>
        add
      </OpenModalBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseBtn onClick={handleClose}>
            <IoIosClose size="26" />
          </CloseBtn>
          <Form onSubmit={handleSubmit}>
            <IoMdContact size="200" style={avatarStyle} />
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
            <SaveButton title="Save" />
          </Form>
        </Box>
      </Modal>
      {/* ,modalRoot */}
    </>
  );
};

export default AddContactForm;
