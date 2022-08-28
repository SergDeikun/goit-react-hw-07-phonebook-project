import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';
import { BsSearch } from 'react-icons/bs';

import { Wrap, FilterInput } from './filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  const style = {
    color: '#5f6368',
    margin: 5,
  };

  const handlefilterChange = e => {
    const filter = e.target.value;

    dispatch(setFilter(filter));
  };

  return (
    <Wrap>
      <BsSearch size="22" style={style} />

      <FilterInput
        type="text"
        value={value}
        onChange={handlefilterChange}
        placeholder="Search"
      />
    </Wrap>
  );
};

export default Filter;
