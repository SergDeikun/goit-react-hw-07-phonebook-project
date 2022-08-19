import { GoPlus } from 'react-icons/go';

import { AddNewContactLink } from './addContactLink.styled';

const AddContact = () => {
  const style = {
    alignItems: 'center',
    marginRight: '5',
  };
  return (
    <AddNewContactLink to={`/newContact`}>
      <GoPlus size="25" style={style} />
      add contact
    </AddNewContactLink>
  );
};

export default AddContact;
