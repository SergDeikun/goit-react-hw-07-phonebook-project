import { List } from './contactList.styled';
import ContactItem from 'components/contactItem/contactItem';
import Spinner from '../spinner/spinner';

import { useGetContactsQuery } from '../../redux/contactsApiSlice/contactsApiSlice';

const ContactsList = () => {
  const { data, isFetching } = useGetContactsQuery();

  return (
    <>
      {isFetching && <Spinner />}
      {data && (
        <List>
          <ContactItem />
        </List>
      )}
    </>
  );
};

export default ContactsList;
