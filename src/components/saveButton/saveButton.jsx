import PropTypes from 'prop-types';

import { SaveBtn } from './saveButton.styled';

const SaveButton = ({ title }) => {
  return (
    <>
      <SaveBtn type="submit">{title}</SaveBtn>
    </>
  );
};

SaveButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SaveButton;
