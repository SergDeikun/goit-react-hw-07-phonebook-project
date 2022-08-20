import ClipLoader from 'react-spinners/ClipLoader';
import { Loader } from './spinner.styled';

const Spinner = () => {
  return (
    <Loader>
      <ClipLoader size={80} color="blue" />
    </Loader>
  );
};

export default Spinner;
