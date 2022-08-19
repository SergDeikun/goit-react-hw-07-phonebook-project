import { IoMdContact } from 'react-icons/io';

import { useGetContactsQuery } from '../../redux/contactsApiSlice/contactsSlice';
import { ItemWrap, Item, Phone, ItemLink, Name } from './contactItem.styled';

const ContactItem = () => {
  const { data } = useGetContactsQuery();
  const style = {
    marginLeft: '5',
    fill: '#008080',
  };

  return data.map(({ name, id, phoneNumber }) => {
    return (
      <ItemWrap key={id}>
        <ItemLink to={`/contacts/${id}`}>
          <Item key={id}>
            <IoMdContact size="48" style={style} />
            <Name>{name}</Name>
            <Phone>{phoneNumber}</Phone>
          </Item>
        </ItemLink>
      </ItemWrap>
    );
  });
};

export default ContactItem;
