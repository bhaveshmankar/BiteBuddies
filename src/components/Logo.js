import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to='/'
      className='text-3xl font-serif font-medium flex items-center'
    >
      🍔 <span className='hidden  md:block logo'>BiteBuddies</span>
    </Link>
  );
};

export default Logo;