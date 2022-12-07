import { Link } from "react-router-dom";
import { UserData } from "../../../types/user";
import { ROUTES } from "../../../utils/routes";

const UserListUI = ({ users }: any) => {
  return (
    <div className='overflow-x-auto relative shadow-md'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Full Name
            </th>
            <th scope='col' className='py-3 px-6'>
              Username
            </th>
            <th scope='col' className='py-3 px-6'>
              Employee ID
            </th>
            <th scope='col' className='py-3 px-6'>
              Email
            </th>
            <th scope='col' className='py-3 px-6'>
              Mobile Number
            </th>
            <th scope='col' className='py-3 px-6'>
              Department
            </th>
            <th scope='col' className='py-3 px-6'>
              Role
            </th>
            <th scope='col' className='py-3 px-6'>
              Joining Date
            </th>
          </tr>
        </thead>
        {users?.length > 0 &&
          users.map((user: UserData) => (
            <tbody key={user.id}>
              <tr className='bg-white border-b '>
                <td className='py-4 px-6'>{user.fullName}</td>
                <td className='py-4 px-6'>{user.username}</td>
                <td className='py-4 px-6'>{user.employeeID}</td>
                <td className='py-4 px-6'>{user.email}</td>
                <td className='py-4 px-6'>{user.mobile_number}</td>
                <Link to={`${ROUTES.DEPARTMENTS}/${user.department.id}`}>
                  <td className='py-4 px-6'>{user.department.name}</td>
                </Link>
                <td className='py-4 px-6'>{user.role.name}</td>
                <td className='py-4 px-6'>
                  {new Date(user.createdAt).toDateString()}
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default UserListUI;
