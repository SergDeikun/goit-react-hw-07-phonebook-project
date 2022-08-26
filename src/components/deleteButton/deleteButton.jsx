import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

// import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from '../../redux/contactsApiSlice/contactsApiSlice';
// import { useParams } from 'react-router-dom';
import { DeleteBtn } from './deleteButton.styled';

const DeleteButton = ({ title }) => {
  // const { contactId } = useParams();
  const navigate = useNavigate();

  // const [deleteContact] = useDeleteContactMutation(contactId);
  const style = {
    // alignItems: 'center',
    textAlign: 'center',
  };

  const handleDeleteContact = async () => {
    try {
      // await deleteContact(contactId);
      navigate('/contacts');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DeleteBtn type="button" onClick={handleDeleteContact}>
        <RiDeleteBin6Line size="22" style={style} />
      </DeleteBtn>
    </div>
  );
};

// DeleteButton.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default DeleteButton;
