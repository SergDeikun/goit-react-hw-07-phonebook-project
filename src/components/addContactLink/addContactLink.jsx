import { GoPlus } from 'react-icons/go';
// import { useNavigate } from 'react-router-dom';

import { AddNewContactLink } from './addContactLink.styled';

const AddContact = () => {
  // const navigate = useNavigate();
  const style = {
    alignItems: 'center',
    marginRight: '5',
  };

  // c

  return (
    <>
      <AddNewContactLink to={`/newContact`}>
        <GoPlus size="25" style={style} />
        add contact
      </AddNewContactLink>
    </>
  );
};

export default AddContact;
