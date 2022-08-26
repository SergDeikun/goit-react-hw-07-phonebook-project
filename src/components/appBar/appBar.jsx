import { useSelector } from 'react-redux';

import AuthMenu from 'components/authMenu/authMenu';
import UserMenu from 'components/userMenu/userMenu';
import Filter from 'components/filter/filter';
import BasicModal from 'components/modal/modal';
import { Header } from './appBar.styled';
// import { AddNewContactLink } from 'components/addContactLink/addContactLink.styled';

const AppBar = () => {
  const { token } = useSelector(state => state.user);

  return (
    <Header>
      {!token && <AuthMenu />}

      {token && (
        <>
          <BasicModal />
          <Filter />
          <UserMenu />
        </>
      )}
    </Header>
  );
};

export default AppBar;
