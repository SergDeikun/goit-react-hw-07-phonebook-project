import { useSelector } from 'react-redux';

// import { IoMdContact } from 'react-icons/io';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
  // useUpdateContactByIdMutation,
} from '../../redux/contactsApiSlice/contactsApiSlice';
import BackgroundLetterAvatars from '../avatar/avatar';
import BasicModal from '../updateModal/updateModal';
// import DeleteButton from 'components/deleteButton/deleteButton';

import {
  ItemWrap,
  Item,
  Phone,
  ItemLink,
  BoxName,
  Name,
} from './contactItem.styled';

const ContactItem = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // const [updateContact] = useUpdateContactByIdMutation();

  // const style = {
  //   marginLeft: '5',
  //   fill: '#008080',
  // };
  const filter = useSelector(state => state.filter.value);

  const normalizeFilter = filter.trim().toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return visibleContacts.map(({ name, id, number }) => {
    return (
      <ItemWrap key={id}>
        <Item key={id}>
          <ItemLink to={`/contacts/${id}`}>
            <BackgroundLetterAvatars name={name} />
            {/* <BoxName> */}
            <Name>{name}</Name>
            {/* </BoxName> */}
            <BoxName>
              <Phone>{number}</Phone>
            </BoxName>
          </ItemLink>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
          <BasicModal />

          {/* <DeleteButton /> */}
        </Item>
      </ItemWrap>
    );
  });
};

export default ContactItem;
