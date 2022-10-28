import { Wrapper, Logo } from './styles';
import logo from '../assets/logo.svg';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <SearchBar />
    </Wrapper>
  );
};
