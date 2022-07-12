import PropTypes from 'prop-types';
import { List } from './contactList.styled';
import { Item } from './contactList.styled';
import { ButtonDelete } from './contactList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonDelete>
          </Item>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
