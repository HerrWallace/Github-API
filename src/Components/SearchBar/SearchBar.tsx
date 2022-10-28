import { Input } from './styles';
import search from '../assets/search.svg';

export const SearchBar = () => {
  return <Input type='search' placeholder='Enter GitHub username' icon={search} />;
};
