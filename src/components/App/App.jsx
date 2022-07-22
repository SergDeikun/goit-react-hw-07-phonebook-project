import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import Container from '../container/container';
import { Container } from './App.styled';
import ContactForm from '../contactForm/contactForm';
import ContactsList from '../contactsList/contactsList';
import Filter from '../filter/filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    }

    setContacts([...contacts, newContact]);
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;
