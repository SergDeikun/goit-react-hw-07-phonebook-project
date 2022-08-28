import { useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import BackgroundLetterAvatars from '../avatar/avatar';

import { useDeleteContactMutation } from '../../redux/contactsApiSlice/contactsApiSlice';

import UpdateContactForm from 'components/updateContactForm/updateContactForm';

import {
  ItemWrap,
  Item,
  Phone,
  ItemLink,
  Name,
  DeleteBtn,
} from './contactItem.styled';

const ContactItem = () => {
  const contacts = useSelector(state => state.contacts.items);

  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter.value);

  const normalizeFilter = filter.trim().toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return visibleContacts.map(({ name, id, number }) => {
    return (
      <ItemWrap key={id}>
        <Item key={id}>
          <ItemLink to={`/contacts/${id}/personInfo`}>
            <BackgroundLetterAvatars name={name} />

            <Name>{name}</Name>

            <Phone>{number}</Phone>
          </ItemLink>

          <DeleteBtn
            type="button"
            onClick={() => {
              deleteContact(id);
              Notify.success(`Сontact deleted`);
            }}
          >
            <RiDeleteBin6Line size={25} />
          </DeleteBtn>

          <UpdateContactForm contactId={id} />
        </Item>
      </ItemWrap>
    );
  });
};

export default ContactItem;
