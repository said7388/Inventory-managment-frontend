import { UpdateDepartmentUIPops } from "../../../types";
import Button from "../helper/button";
import Input from "../helper/input";

const UpdateDepartmentUI: React.FC<UpdateDepartmentUIPops> = ({
  register,
  errors,
  handleSubmit,
  updateDepartmentFunction,
}) => {
  return (
    <form onSubmit={handleSubmit(updateDepartmentFunction)}>
      <Input
        title='Department Name'
        name='department'
        register={register}
        errors={errors}
      />

      <p role='alert' className='text-red-500'>
        {errors["department"]?.message}
      </p>

      <div className='my-8 w-full flex justify-center'>
        <Button size='sm' title='Update Department' />
      </div>
    </form>
  );
};

export default UpdateDepartmentUI;
