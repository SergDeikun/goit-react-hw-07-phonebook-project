import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi';

import { useLogOutMutation } from 'redux/userApiSlice/userApiSlice';
import { UserMenuWrap, Text, Nik, LogOutBtn } from './userMenu.styled';

const UserMenu = () => {
  const name = useSelector(state => state.user.name);
  const [logOut] = useLogOutMutation();
  const navigate = useNavigate();
  const style = {
    fill: '#ffff',
  };
  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <UserMenuWrap>
      <Text>Hello,</Text>
      <HiUserCircle size={45} style={style} />
      <Text>
        <Nik>{name}</Nik>!
      </Text>
      <LogOutBtn type="button" onClick={handleLogOut}>
        LogOut
      </LogOutBtn>
    </UserMenuWrap>
  );
};

export default UserMenu;
