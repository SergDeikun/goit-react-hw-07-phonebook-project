// import { useSelector, useDispatch } from 'react-redux';

import { List } from './contactList.styled';
// import { Item } from './contactList.styled';
// import { ButtonDelete } from './contactList.styled';
// import Filter from '../filter/filter';
import ContactItem from 'components/contactItem/contactItem';
import Spinner from '../spinner/spinner';

// import { removeContact } from 'redux/contacts';
import {
  useGetContactsQuery,
  // useDeleteContactMutation,
} from '../../redux/contactsApiSlice/contactsApiSlice';

const ContactsList = () => {
  const { data, isFetching } = useGetContactsQuery();
  //todo скоріш за все тут потрібно тільки isSuccess
  // const [deleteContact] = useDeleteContactMutation();

  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filter.value);
  // console.log(filter);
  // const dispatch = useDispatch();

  // const normalizeFilter = filter.trim().toLowerCase();
  // const visibleContacts = data.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizeFilter)
  // );

  // const handleDeleteContact = e => {
  //   deleteContact(e.target.id);
  // dispatch(removeContact(e.target.id));
  // };

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
