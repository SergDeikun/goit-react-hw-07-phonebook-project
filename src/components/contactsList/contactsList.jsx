import { useSelector, useDispatch } from 'react-redux';

import { List } from './contactList.styled';
import { Item } from './contactList.styled';
import { ButtonDelete } from './contactList.styled';
import { removeContact } from 'redux/contacts';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsApiSlice/contactsSlice';

const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  console.log(filter);
  // const dispatch = useDispatch();

  // const normalizeFilter = filter.trim().toLowerCase();
  // const visibleContacts = data.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizeFilter)
  // );

  const handleDeleteContact = e => {
    deleteContact(e.target.id);
    // dispatch(removeContact(e.target.id));
  };

  return (
    <List>
      {data &&
        data.map(({ name, id, phoneNumber }) => {
          return (
            <Item key={id}>
              {name}: {phoneNumber}
              <ButtonDelete type="button" id={id} onClick={handleDeleteContact}>
                Delete
              </ButtonDelete>
            </Item>
          );
        })}
    </List>
  );
};

export default ContactsList;
