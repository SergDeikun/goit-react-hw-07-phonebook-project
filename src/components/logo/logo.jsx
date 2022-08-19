import { IoMdContacts } from 'react-icons/io';
import { Wrap, Text } from './logo.styled';

const Logo = () => {
  const style = {
    fill: 'blue',
    alignItems: 'center',
    marginLeft: '15',
  };

  return (
    <Wrap>
      <IoMdContacts size="48" style={style} />
      <Text>Contacts</Text>
    </Wrap>
  );
};

export default Logo;
