import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { Container } from './App.styled';
import AppBar from 'components/appBar/appBar';
import Spinner from 'components/spinner/spinner';
import PrivateRoutes from 'components/privateRouts/privateRouts';
import NotFound from 'pages/notFound/notFound';

import { useCurrentUserQuery } from '../../redux/userApiSlice/userApiSlice';

// =============================================

const LoginPage = lazy(() => import('../../pages/loginPage/loginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/registerPage/registerPage')
);
const Contacts = lazy(() => import('../../pages/contacts/contacts'));
const ContactCard = lazy(() => import('../../pages/contactCard/contactCard'));
const AddContactForm = lazy(() => import('../addContactForm/addContactForm'));
const UpdateContactForm = lazy(() =>
  import('../updateContactForm/updateContactForm')
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
              <Route path="contacts" element={<AddContactForm />} />
              <Route path=":contactId" element={<UpdateContactForm />} />
            </Route>
            <Route
              path="/contacts/:contactId/personInfo"
              element={<ContactCard />}
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
