// import { Outlet } from 'react-router-dom';
import ContactsList from 'components/contactsList/contactsList';
import { useGetContactsQuery } from 'redux/contactsApiSlice/contactsApiSlice';

const Contacts = () => {
  useGetContactsQuery();

  return (
    <>
      <ContactsList />
      {/* <Outlet /> */}
    </>
  );
};

export default Contacts;
