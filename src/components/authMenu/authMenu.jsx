import { AuthMenuWrap, Title, AuhtMenuLink } from './authMenu.styled';

const AuthMenu = () => {
  return (
    <AuthMenuWrap>
      <Title>
        Hi! <AuhtMenuLink to={'/users/login'}>Sign in</AuhtMenuLink> or
        <AuhtMenuLink to={'/users/signup'}>register</AuhtMenuLink>
      </Title>
    </AuthMenuWrap>
  );
};

export default AuthMenu;
