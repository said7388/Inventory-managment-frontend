import { Key } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const DepartmentUI = ({
  departments,
  handleClickOpenDialog,
  onClickEditDepartment,
}: any) => {
  return (
    <div>
      <div className='md:px-16'>
        <div className=' rounded-md border'>
          <table className='w-full table-fixed text-sm text-gray-500'>
            <thead className='bg-gray-50 text-left text-xs uppercase text-gray-700 '>
              <tr>
                <th scope='col' className='py-3 px-6 text-xl'>
                  Department List
                </th>
                <th scope='col' className='py-3 px-6'></th>
                <th scope='col' className='flex justify-end py-3 px-6'>
                  <Link
                    to={`${ROUTES.DEPARTMENTS}/create`}
                    className='flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100'>
                    <IoMdAddCircleOutline className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                    <span className='ml-3'>Add New Department</span>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {departments?.length > 0 &&
                departments?.map(
                  (department: {
                    id: Key;
                    attributes: {
                      name: string;
                    };
                  }) => (
                    <tr key={department.id} className='border-b bg-white '>
                      <th
                        scope='row'
                        className='whitespace-nowrap py-4 px-6 text-left font-medium text-gray-900 '>
                        <Link to={`${ROUTES.DEPARTMENTS}/${department.id}`}>
                          {department?.attributes?.name}
                        </Link>
                      </th>
                      <td className='  py-4 px-6 text-right'>
                        <button
                          onClick={() => onClickEditDepartment(department)}
                          className='flex items-center ml-auto rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100'>
                          <FiEdit className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                          <span className='ml-3'>EDIT</span>
                        </button>
                      </td>
                      <td className=' py-4 px-6 text-right'>
                        <button
                          onClick={() => handleClickOpenDialog(department.id)}
                          className='flex ml-auto items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100'>
                          <FiDelete className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                          <span className='ml-3'>DELETE</span>
                        </button>
                      </td>
                    </tr>
                  ),
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepartmentUI;
