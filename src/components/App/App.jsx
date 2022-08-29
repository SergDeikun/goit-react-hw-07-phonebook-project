import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { Container } from './App.styled';
import AppBar from 'components/appBar/appBar';
import Spinner from 'components/spinner/spinner';
import PrivateRoute from 'components/privateRout/privateRout';
import NotFound from 'pages/notFound/notFound';

import { useCurrentUserQuery } from '../../redux/userApiSlice/userApiSlice';

const HomePage = lazy(() => import('../../pages/homePage/homePage'));
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
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/contacts"
            element={
              <>
                <AppBar />
                <Contacts />
              </>
            }
          >
            <Route path="contacts" element={<AddContactForm />} />
            <Route path=":contactId" element={<UpdateContactForm />} />
          </Route>
          <Route
            path="/contacts/:contactId/personInfo"
            element={<ContactCard />}
          />

          <Route path="/users/login" element={<LoginPage />} />

          <Route path="/users/signup" element={<RegisterPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
    // <Container>
    //   <Suspense fallback={<Spinner />}>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />

    //       <Route path="/contacts" element={<PrivateRoute />}>
    //         <Route
    //           path="/contacts"
    //           element={
    //             <>
    //               <AppBar />
    //               <Contacts />
    //             </>
    //           }
    //         >
    //           <Route path="contacts" element={<AddContactForm />} />
    //           <Route path=":contactId" element={<UpdateContactForm />} />
    //         </Route>
    //         <Route
    //           path="/contacts/:contactId/personInfo"
    //           element={<ContactCard />}
    //         />
    //       </Route>

    //       <Route path="/users/login" element={<LoginPage />} />

    //       <Route path="/users/signup" element={<RegisterPage />} />

    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </Suspense>
    // </Container>
  );
};

export default App;
<Route exact path="/" element={<PrivateRoute component={HomePage} />} />;
