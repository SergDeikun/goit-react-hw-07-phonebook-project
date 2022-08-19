// import { useGetContactsQuery } from 'redux/contactsApiSlice/contactsSlice';

import PersonInfo from 'components/personInfo/personInfo';
// import DeleteButton from 'components/deleteButton/deleteButton';

const PersonCard = () => {
  // const { data, isSuccess } = useGetContactsQuery();

  return (
    <>
      {/* {isSuccess && ( */}
      <div>
        <PersonInfo />
        {/* <DeleteButton /> */}
      </div>
      {/* )} */}
    </>
  );
};

export default PersonCard;
