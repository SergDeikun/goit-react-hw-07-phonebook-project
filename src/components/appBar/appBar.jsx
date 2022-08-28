import { useSelector } from 'react-redux';

import AuthMenu from 'components/authMenu/authMenu';
import AddContactForm from 'components/addContactForm/addContactForm';
import Filter from 'components/filter/filter';
import UserMenu from 'components/userMenu/userMenu';

// import { useLoginMutation } from 'redux/userApiSlice/userApiSlice';

import { Header } from './appBar.styled';

const AppBar = () => {
  const { token } = useSelector(state => state.user);
  // const [{ isSuccess }] = useLoginMutation();
  // const { isLoggedIn } = useSelector(state => state.user);
  return (
    <Header>
      {/* <AuthMenu />

      {isSuccess && (
        <>
          <BasicModal />
          <Filter />
          <UserMenu />
        </>
      )} */}

      {!token && <AuthMenu />}
      {/* {isLoggedIn ? <UserMenu /> : <AuthMenu />} */}

      {token && (
        <>
          <AddContactForm />
          <Filter />
          <UserMenu />
        </>
      )}
    </Header>
  );
};

export default AppBar;
