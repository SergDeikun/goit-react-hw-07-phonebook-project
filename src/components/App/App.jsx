import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './App.styled';
import ContactForm from '../contactForm/contactForm';
import ContactsList from '../contactsList/contactsList';
import Filter from '../filter/filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
