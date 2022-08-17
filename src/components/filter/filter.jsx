import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

import { FilterInput } from './filter.styled';
import { useGetContactsQuery } from '../../redux/contactsApiSlice/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  const { data } = useGetContactsQuery();

  const handlefilterChange = e => {
    const filter = e.target.value;

    const normalizeFilter = filter.trim().toLowerCase();
    const visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    // dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={handlefilterChange} />
    </label>
  );
};

export default Filter;
