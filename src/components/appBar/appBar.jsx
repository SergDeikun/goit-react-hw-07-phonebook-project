import { useSelector } from 'react-redux';

import Header from 'components/header/header';
import AddContactForm from 'components/addContactForm/addContactForm';
import Filter from 'components/filter/filter';
import UserMenu from 'components/userMenu/userMenu';

const AppBar = () => {
  const { token } = useSelector(state => state.user);

  return (
    <Header>
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
