import { useState } from 'react';
import {
  useAddContactMutation,
  // useGetContactsQuery,
} from '../../redux/contactsApiSlice/contactsSlice';

import { Input } from '../contactForm/contactForm.styled';
import { ButtonSubmit } from '../contactForm/contactForm.styled';

const NewCotactItem = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContactt] = useAddContactMutation();

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

  const handleSubmit = e => {
    e.preventDefault();

    addContactt({
      name: e.target.name.value,
      phoneNumber: e.target.number.value,
    });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <ButtonSubmit type="submit">add contact</ButtonSubmit>
    </form>
  );
};

export default NewCotactItem;
