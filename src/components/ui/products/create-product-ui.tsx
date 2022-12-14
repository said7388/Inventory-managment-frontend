import DatePicker from "react-datepicker";
import { ROUTES } from "../../../utils/routes";
import Button from "../helper/button";
import Input from "../helper/input";

const CreateProductUI = ({
  handleSubmit,
  createProductFunction,
  onClictPlus,
  setPurchasedTime,
  register,
  purchasedTime,
  errors,
  departments,
  categories,
  users,
}: any) => {
  return (
    <form onSubmit={handleSubmit(createProductFunction)}>
      <Input
        title='Product Name'
        name='name'
        register={register}
        errors={errors}
      />

      <p role='alert' className='text-red-500'>
        {errors["name"]?.message}
      </p>

      <Input
        title='Product Code'
        name='product_code'
        register={register}
        errors={errors}
      />

      <Input title='Brand' name='brand' register={register} errors={errors} />

      <Input title='Vendor' name='vendor' register={register} errors={errors} />
      <Input
        title='Details'
        name='details'
        register={register}
        errors={errors}
      />

      <div className='my-5'>
        <h3 className='text-base font-medium uppercase pb-4'>Purchased At</h3>
        <DatePicker
          dateFormat='yyyy/MM/dd'
          className='py-2 px-3 w-full border rounded'
          selected={purchasedTime}
          onChange={(e) => setPurchasedTime(e)}
        />
      </div>

      <>
        <div className='flex items-center gap-2'>
          <label
            htmlFor='default'
            className='block mb-2 mt-5 text-sm uppercase font-medium text-gray-900 '>
            Department
          </label>
          <button
            className='text-xl mt-2 text-gray-500'
            onClick={() => onClictPlus(`${ROUTES.DEPARTMENTS}/create`)}>
            +
          </button>
        </div>
        <select
          defaultValue={""}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          {...register("department")}
          aria-invalid={errors.department ? "true" : "false"}>
          <option value='' disabled>
            Choose a department
          </option>
          {departments?.length > 0 &&
            departments.map(
              (department: {
                id: number;
                attributes: {
                  name: string;
                };
              }) => (
                <option key={department.id} value={department.id}>
                  {department.attributes.name}
                </option>
              ),
            )}
        </select>
      </>

      <p role='alert' className='text-red-500'>
        {errors["department"]?.message}
      </p>

      <>
        <div className='flex items-center gap-2'>
          <label className='block mb-2 mt-5 text-sm uppercase font-medium text-gray-900 '>
            Category
          </label>
          <button
            className='text-xl mt-2 text-gray-500'
            onClick={() => onClictPlus(`${ROUTES.CATEGORY}/create`)}>
            +
          </button>
        </div>
        <select
          defaultValue={""}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          {...register("category")}
          aria-invalid={errors.category ? "true" : "false"}>
          <option value='' disabled>
            Choose a category
          </option>
          {categories?.length > 0 &&
            categories.map(
              (category: {
                id: number;
                attributes: {
                  name: string;
                };
              }) => (
                <option key={category.id} value={category.id}>
                  {category.attributes.name}
                </option>
              ),
            )}
        </select>
      </>

      <p role='alert' className='text-red-500'>
        {errors["category"]?.message}
      </p>

      <>
        <label className='block mb-2 mt-5 text-sm uppercase font-medium text-gray-900 '>
          Using By
        </label>
        <select
          defaultValue={""}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          {...register("user")}
          aria-invalid={errors.user ? "true" : "false"}>
          <option value='' disabled>
            Choose a user
          </option>
          {users?.length > 0 &&
            users.map(
              (user: { id: number; fullName: string; username: string }) => (
                <option key={user.id} value={user.id}>
                  {user.fullName || user.username}
                </option>
              ),
            )}
        </select>
      </>

      <p role='alert' className='text-red-500'>
        {errors["user"]?.message}
      </p>

      <div className='my-8'>
        <Button size='lg' title='Create Product' />
      </div>
    </form>
  );
};

export default CreateProductUI;
