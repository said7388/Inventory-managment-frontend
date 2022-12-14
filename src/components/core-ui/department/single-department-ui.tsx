import { DepartmentListUser } from "../../../types/user";
import ProductsTable from "../products/products-table";

const SingleDepartmentUI = ({ data }: any) => {
  const products = data?.products;
  const users = data?.users;

  return (
    <div>
      <h1 className='text-center text-2xl mb-6 font-semibold uppercase'>
        {data?.name} Department
      </h1>

      <h2 className='text-xl uppercase font-medium my-3'>Product List</h2>
      <ProductsTable editable={false} products={products} />

      {users?.length > 0 && (
        <>
          <h2 className='text-xl mt-5 uppercase font-medium py-3'>User List</h2>
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
              {users.map((user: DepartmentListUser) => (
                <tbody key={user.id}>
                  <tr className='bg-white border-b '>
                    <td className='py-4 px-6'>{user.fullName}</td>
                    <td className='py-4 px-6'>{user.username}</td>
                    <td className='py-4 px-6'>{user.employeeID}</td>
                    <td className='py-4 px-6'>{user.email}</td>
                    <td className='py-4 px-6'>{user.mobileNumber}</td>
                    <td className='py-4 px-6'>{user?.department?.name}</td>
                    <td className='py-4 px-6'>{user?.role?.name}</td>
                    <td className='py-4 px-6'>
                      {new Date(user.createdAt).toDateString()}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleDepartmentUI;
