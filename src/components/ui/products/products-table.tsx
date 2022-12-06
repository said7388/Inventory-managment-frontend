import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ProductType } from "../../../types";

const ProductsTable = ({ products }: { products: ProductType[] }) => {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Product name
            </th>
            <th scope='col' className='py-3 px-6'>
              Brand
            </th>
            <th scope='col' className='py-3 px-6'>
              Category
            </th>
            <th scope='col' className='py-3 px-6'>
              Code
            </th>
            <th scope='col' className='py-3 px-6'>
              Vendor
            </th>
            <th scope='col' className='py-3 px-6'>
              Department
            </th>
            <th scope='col' className='py-3 px-6'>
              Using By
            </th>
            <th scope='col' className='py-3 px-6'>
              Purchased At
            </th>
            <th scope='col' className='py-3 px-6'>
              Action
            </th>
          </tr>
        </thead>
        {products?.length > 0 &&
          products.map((product: ProductType) => (
            <tbody key={product.id}>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {product.attributes?.name}
                </th>
                <td className='py-4 px-6'>{product.attributes?.brand}</td>
                <td className='py-4 px-6'>
                  {product.attributes?.category?.data?.attributes?.name}
                </td>
                <td className='py-4 px-6'>
                  {product.attributes?.product_code}
                </td>
                <td className='py-4 px-6'>{product.attributes?.vendor}</td>
                <td className='py-4 px-6'>
                  {product.attributes?.department?.data?.attributes?.name}
                </td>
                <td className='py-4 px-6'>
                  {product.attributes?.usingBy?.data?.attributes?.fullName}
                </td>
                <td className='py-4 px-6'>{product.attributes?.purchasedAt}</td>
                <td className='flex items-center py-4 px-6 space-x-3'>
                  <button>
                    <AiOutlineEdit className=' text-blue-600 dark:text-blue-500 w-6 h-6' />
                  </button>
                  <button>
                    <MdDelete className=' text-red-600 dark:text-red-500 w-6 h-6' />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default ProductsTable;
