import { useSelector, useDispatch } from 'react-redux';

import { List } from './contactList.styled';
import { Item } from './contactList.styled';
import { ButtonDelete } from './contactList.styled';
import { removeContact } from 'redux/contacts';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const normalizeFilter = filter.trim().toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const handleDeleteContact = e => {
    dispatch(removeContact(e.target.id));
  };

  return (
    <List>
      {visibleContacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
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
