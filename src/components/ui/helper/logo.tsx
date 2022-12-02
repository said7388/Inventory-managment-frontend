import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className='flex items-center'>
      <img
        src='https://i.ibb.co/khhJrzr/logo.png'
        className='mr-3 h-6 sm:h-9'
        alt='Teton Logo'
      />
    </Link>
  );
};

export default Logo;
