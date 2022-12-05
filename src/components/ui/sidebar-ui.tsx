import { BsPersonPlusFill } from "react-icons/bs";
import { MdCategory, MdDashboard, MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarUiPops } from "../../types";

const SidebarUI: React.FC<SidebarUiPops> = ({ handleLogout }) => {
  return (
    <aside
      className='w-64 md:w-[25%] xl:w-[20%]  min-h-screen pt-16 top-0'
      aria-label='Sidebar'>
      <div className='overflow-y-auto h-full  pt-4 px-3 bg-gray-50 rounded'>
        <ul className='space-y-2'>
          <li>
            <Link
              to='/'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
              <MdDashboard className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to='/category'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
              <MdCategory className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Category</span>
            </Link>
          </li>

          <li>
            <Link
              to='/registration'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
              <BsPersonPlusFill className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Create User</span>
            </Link>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className='flex w-full justify-start p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 '>
              <MdOutlineLogout className=' w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ' />
              <span className=' ml-3 whitespace-nowrap'>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarUI;
