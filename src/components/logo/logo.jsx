import { MdContactPhone } from 'react-icons/md';
import { Wrap, LogoLink, Text } from './logo.styled';

const Logo = () => {
  const style = {
    fill: '#333333',
    alignItems: 'center',
    marginLeft: '15',
  };

  return (
    <Wrap>
      <LogoLink to={'/'}>
        <MdContactPhone size="48" style={style} />
        <Text>Contacts</Text>
      </LogoLink>
    </Wrap>
  );
};

export default Logo;
