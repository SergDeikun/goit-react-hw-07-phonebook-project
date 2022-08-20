import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsApiSlice/contactsSlice';
import { useParams } from 'react-router-dom';
import { DeleteBtn } from './deleteButton.styled';

const DeleteButton = ({ title }) => {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async () => {
    try {
      await deleteContact(contactId);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DeleteBtn type="button" onClick={handleDeleteContact}>
        {title}
      </DeleteBtn>
    </div>
  );
};

DeleteButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DeleteButton;
