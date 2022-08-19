import Logo from 'components/logo/logo';
import ContactsList from 'components/contactsList/contactsList';
import Filter from 'components/filter/filter';
import AddContact from 'components/addContactLink/addContactLink';
import { Wrap } from './contacts.styled';

const Contacts = () => {
  return (
    <>
      <Wrap>
        <Logo />
        {/* <Logo src={avatar} alt="" /> */}
        <Filter />
        <AddContact />
      </Wrap>
      <ContactsList />
    </>
  );
};

export default Contacts;
