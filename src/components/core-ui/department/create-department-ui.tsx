import { CreateDepartmentPops } from "../../../types";
import Button from "../helper/button";
import Input from "../helper/input";

const CreateDepartmentUI: React.FC<CreateDepartmentPops> = ({
  register,
  errors,
  handleSubmit,
  createDepartmentFunction,
}) => {
  return (
    <div className='sm:max-w-2xl mx-auto'>
      <h2 className='text-2xl font-medium text-center mb-5'>
        Create new Department
      </h2>
      <form onSubmit={handleSubmit(createDepartmentFunction)}>
        <Input
          title='Department Name'
          name='department'
          register={register}
          errors={errors}
        />

        <p role='alert' className='text-red-500'>
          {errors["department"]?.message}
        </p>

        <div className='my-8 w-full flex justify-end'>
          <Button size='sm' title='Create Department' />
        </div>
      </form>
    </div>
  );
};

export default CreateDepartmentUI;
