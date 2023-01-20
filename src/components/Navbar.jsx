import logo from '../asset/logo.jpg';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap py-6 px-32 sticky top-0 bg-gray-100'>
      <img src={logo} alt='logo' className='h-20 w-20 rounded-full' />
      <SearchBar />
      <h2>Phone: 0975108888</h2>
    </nav>
  );
};

export default Navbar;
