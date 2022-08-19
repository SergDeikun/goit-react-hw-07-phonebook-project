import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';
import { BsSearch } from 'react-icons/bs';

import { Wrap, FilterInput, SearchBtn } from './filter.styled';
// import { useGetContactsQuery } from '../../redux/contactsApiSlice/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  const style = {
    color: '#5f6368',
  };
  // const { data } = useGetContactsQuery();

  const handlefilterChange = e => {
    // const filter = e.target.value;
    //
    // const normalizeFilter = filter.trim().toLowerCase();
    // const visibleContacts = data.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizeFilter)
    // );
    dispatch(setFilter(e.target.value));
  };

  return (
    <Wrap>
      <SearchBtn type="button">
        <BsSearch size="22" style={style} />
      </SearchBtn>

      <FilterInput
        type="text"
        value={value}
        onChange={handlefilterChange}
        placeholder="Search"
      />
    </Wrap>
    // ===================
    // <label>
    //   {/* Find contacts by name */}
    //   <button>
    //     <AiOutlineSearch />
    //   </button>

    //   <FilterInput
    //     type="text"
    //     value={value}
    //     onChange={handlefilterChange}
    //     placeholder="Search"
    //   />
    // </label>
  );
};

export default Filter;
