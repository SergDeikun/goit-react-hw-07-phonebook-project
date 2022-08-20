import { Routes, Route } from 'react-router-dom';

import { Container } from './App.styled';
import Contacts from 'pages/contacts/contacts';
import ContactCard from 'pages/contactCard/contactCard';
import NewContact from 'pages/addNewContact/addNewContact';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contacts/:contactId" element={<ContactCard />} />
        <Route path="/newContact" element={<NewContact />} />
      </Routes>
    </Container>
  );
};

export default App;
