import { Routes, Route } from 'react-router-dom';

import { Container } from './App.styled';
import Contacts from 'pages/contacts/contacts';
import PersonCard from 'pages/personCard/personCard';
import NewContact from 'pages/newContact/newContact';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contacts/:contactId" element={<PersonCard />} />
        <Route path="/newContact" element={<NewContact />} />
      </Routes>
    </Container>
  );
};

export default App;
