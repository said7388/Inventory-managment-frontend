import { RegistrationUiPops } from "../../types";
import Button from "./helper/button";
import Input from "./helper/input";

const RegistrationUI = ({
  register,
  errors,
  handleSubmit,
  handleOnSubmit,
  departments,
}: RegistrationUiPops) => {
  return (
    <div className=' flex items-center justify-center px-6 py-8 mx-auto md:h-full'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-4 space-y-4 md:space-y-6 sm:p-6'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white uppercase'>
            Create a new user
          </h1>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Input
              title='Email'
              name='email'
              type='email'
              register={register}
              errors={errors}
              placeholder='example@email.com'
            />

            <p role='alert' className='text-red-500'>
              {errors["email"]?.message}
            </p>

            <Input
              title='Employee ID'
              name='employeeID'
              type='number'
              register={register}
              errors={errors}
              placeholder='123456'
            />

            <p role='alert' className='text-red-500'>
              {errors["employeeID"]?.message}
            </p>

            <Input
              title='Username'
              name='username'
              type='text'
              register={register}
              errors={errors}
              placeholder='jhone23'
            />

            <p role='alert' className='text-red-500'>
              {errors["username"]?.message}
            </p>

            <Input
              title='Full Name'
              name='fullName'
              type='text'
              register={register}
              errors={errors}
              placeholder='Alon Musk'
            />

            <p role='alert' className='text-red-500'>
              {errors["fullName"]?.message}
            </p>

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

            <Input
              title='Password'
              type='password'
              name='password'
              register={register}
              errors={errors}
              placeholder='••••••••'
            />

            <p role='alert' className='text-red-500'>
              {errors["password"]?.message}
            </p>

            <Input
              title='Confirm Password'
              type='password'
              name='confirm'
              register={register}
              errors={errors}
              placeholder='••••••••'
            />

            <p role='alert' className='text-red-500'>
              {errors["confirm"]?.message}
            </p>

            <Input
              title='Mobile Number'
              name='mobileNumber'
              type='text'
              register={register}
              errors={errors}
              placeholder='+880177777777'
            />

            <p role='alert' className='text-red-500'>
              {errors["mobileNumber"]?.message}
            </p>

            <div className='mt-8'>
              <Button size='lg' title='Create User' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationUI;
