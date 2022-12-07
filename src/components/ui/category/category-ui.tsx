import { Key } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const CategoryUI = ({
  categories,
  setModalOpen,
  handleDeleteCategory,
  onClickEditCategory,
}: any) => {
  return (
    <div className='p-5'>
      <div className='md:px-16'>
        <div className=' rounded-md border'>
          <table className='w-full table-fixed text-sm text-gray-500'>
            <thead className='bg-gray-50 text-left text-xs uppercase text-gray-700 '>
              <tr>
                <th scope='col' className='py-3 px-6 text-xl'>
                  Category List
                </th>
                <th scope='col' className='py-3 px-6'></th>
                <th scope='col' className='flex justify-end py-3 px-6'>
                  <button
                    onClick={() => setModalOpen(true)}
                    className='flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100'>
                    <IoMdAddCircleOutline className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                    <span className='ml-3'>Add New Category</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories?.length > 0 &&
                categories?.map(
                  (category: {
                    id: Key;
                    attributes: {
                      name: string;
                    };
                  }) => (
                    <tr key={category.id} className='border-b bg-white '>
                      <th
                        scope='row'
                        className='whitespace-nowrap py-4 px-6 text-left font-medium text-gray-900 '>
                        <Link to={`${ROUTES.CATEGORY}/${category.id}`}>
                          {category?.attributes?.name}
                        </Link>
                      </th>
                      <td className='  py-4 px-6 text-right'>
                        <button
                          onClick={() => onClickEditCategory(category)}
                          className='flex items-center ml-auto rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100'>
                          <FiEdit className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                          <span className='ml-3'>EDIT</span>
                        </button>
                      </td>
                      <td className=' py-4 px-6 text-right'>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
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

export default CategoryUI;
