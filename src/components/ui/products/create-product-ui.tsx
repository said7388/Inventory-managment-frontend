import DatePicker from "react-datepicker";
import Button from "../helper/button";
import Input from "../helper/input";

const CreateProductUI = ({
  handleSubmit,
  createDepartmentFunction,
  setPurchasedTime,
  register,
  purchasedTime,
  errors,
  departments,
  categories,
  users,
}: any) => {
  return (
    <form onSubmit={handleSubmit(createDepartmentFunction)}>
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
        <label
          htmlFor='default'
          className='block mb-2 mt-5 text-sm uppercase font-medium text-gray-900 '>
          Department
        </label>
        <select
          defaultValue={""}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          {...register("department", {
            required: "Department is required",
          })}
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

      <>
        <label className='block mb-2 mt-5 text-sm uppercase font-medium text-gray-900 '>
          Category
        </label>
        <select
          defaultValue={""}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          {...register("category", {
            required: "Category is required",
          })}
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

      <>
        <label className='block mb-2 mt-5 text-sm uppercase font-medium text-gray-900 '>
          Using By
        </label>
        <select
          defaultValue={""}
          className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          {...register("user", {
            required: "User is required",
          })}
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

      <div className='my-8'>
        <Button size='lg' title='Create Product' />
      </div>
    </form>
  );
};

export default CreateProductUI;
