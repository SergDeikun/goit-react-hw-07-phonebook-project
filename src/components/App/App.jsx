import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { Container } from './App.styled';
import AppBar from 'components/appBar/appBar';
import PrivateRoutes from 'components/privateRouts/privateRouts';
import { useCurrentUserQuery } from '../../redux/userApiSlice/userApiSlice';
import Spinner from 'components/spinner/spinner';
import BasicModal from 'components/modal/modal';
// import updateBasicModal from 'components/updateModal/updateModal';
import PersonInfo from 'components/personInfo/personInfo';

// import MenuAppBar from 'components/appBar/appBar';
const Contacts = lazy(() => import('../../pages/contacts/contacts'));
// const ContactCard = lazy(() =>
//   import('../../pages/addNewContact/addNewContact')
// );
// const NewContact = lazy(() =>
//   import('../../pages/addNewContact/addNewContact')
// );
const LoginPage = lazy(() => import('../../pages/loginPage/loginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/registerPage/registerPage')
);

const App = () => {
  const { token } = useSelector(state => state.user);

  useCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/contacts" element={<PrivateRoutes />}>
            <Route path="/contacts" element={<Contacts />}>
              <Route path="contacts" element={<BasicModal />} />
            </Route>
            <Route path="/contacts/:contactId" element={<PersonInfo />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
