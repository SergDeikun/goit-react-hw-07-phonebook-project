import { Header, PageLink } from './navigate.styled';

const Navigate = () => {
  return (
    <Header>
      <PageLink to={'/contacts'}>Contacts</PageLink>
    </Header>
  );
};

export default Navigate;
