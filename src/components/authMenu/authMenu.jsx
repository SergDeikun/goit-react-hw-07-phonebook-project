import { AuthMenuWrap, Title, AuhtMenuLink } from './authMenu.styled';

const AuthMenu = () => {
  return (
    <AuthMenuWrap>
      <Title>
        Hi! <AuhtMenuLink to={'/login'}>Sign in</AuhtMenuLink> or{' '}
        <AuhtMenuLink to={'/register'}>register</AuhtMenuLink>{' '}
      </Title>
      {/* <AuhtMenuLink to={'/login'}>Login</AuhtMenuLink>
      <AuhtMenuLink to={'/register'}>Register</AuhtMenuLink> */}
    </AuthMenuWrap>
  );
};

export default AuthMenu;
