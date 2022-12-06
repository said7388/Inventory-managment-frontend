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

      <div className='my-8'>
        <Button size='lg' title='Create Department' />
      </div>
    </form>
  );
};

export default CreateDepartmentUI;
