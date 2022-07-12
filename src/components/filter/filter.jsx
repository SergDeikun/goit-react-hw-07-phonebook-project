import PropTypes from 'prop-types';
import { FilterInput } from './filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
