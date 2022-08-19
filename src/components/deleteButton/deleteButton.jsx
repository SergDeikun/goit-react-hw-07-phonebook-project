import {
  useDeleteContactMutation,
  // useGetContactsQuery,
} from '../../redux/contactsApiSlice/contactsSlice';
import { useParams } from 'react-router-dom';
import { DeleteBtn } from './deleteButton.styled';

const DeleteButton = () => {
  const { contactId } = useParams();

  // const { data, isSuccess } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = e => {
    deleteContact(contactId);
  };

  return (
    <>
      {/* {isSuccess && ( */}
      <DeleteBtn type="button" onClick={handleDeleteContact}>
        Delete
      </DeleteBtn>
      {/* )} */}
    </>
  );
};

export default DeleteButton;
