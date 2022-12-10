import { GrFormClose } from "react-icons/gr";
import { TbMenu2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../redux/features/auth-slice";
import Button from "./helper/button";
import Logo from "./helper/logo";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <header className='z-50 absolute top-0 w-full'>
      <nav className='bg-white shadow border-gray-200 px-4 lg:px-6 py-4 '>
        <div className='flex flex-wrap justify-between items-center max-w-screen-2xl 2xl:mx-auto '>
          <Logo />
          <div className='flex items-end'>
            {user?.username ? (
              <p>{user.username}</p>
            ) : (
              <Link to='/login'>
                <Button title='Login' />
              </Link>
            )}
            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              aria-controls='mobile-menu-2'
              aria-expanded='false'>
              <TbMenu2 className='w-6 h-6' />
              <GrFormClose className='hidden w-6 h-6' />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
