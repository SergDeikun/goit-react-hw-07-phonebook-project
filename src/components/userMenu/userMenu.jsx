import { useSelector } from 'react-redux';

import { useLogOutMutation } from 'redux/userApiSlice/userApiSlice';
import { UserMenuWrap, Text, Nik, LogOutBtn } from './userMenu.styled';

const UserMenu = () => {
  const name = useSelector(state => state.user.name);
  const [logOut] = useLogOutMutation();

  return (
    <UserMenuWrap>
      <img src="" alt="" />
      <Text>
        Hello,
        <Nik>{name}</Nik>!
      </Text>
      <LogOutBtn type="button" onClick={logOut}>
        LogOut
      </LogOutBtn>
    </UserMenuWrap>
  );
};

export default UserMenu;
