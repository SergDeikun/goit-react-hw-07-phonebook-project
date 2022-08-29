import ContactsList from 'components/contactsList/contactsList';
import { useGetContactsQuery } from 'redux/contactsApiSlice/contactsApiSlice';

const Contacts = () => {
  useGetContactsQuery();

  return (
    <>
      <ContactsList />
    </>
  );
};

export default Contacts;
