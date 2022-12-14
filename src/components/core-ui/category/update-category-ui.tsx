import { UpdateCategoryUIPops } from "../../../types";
import Button from "../helper/button";
import Input from "../helper/input";

const UpdateCategoryUI: React.FC<UpdateCategoryUIPops> = ({
  register,
  errors,
  handleSubmit,
  updateCategoryFunction,
}) => {
  return (
    <form onSubmit={handleSubmit(updateCategoryFunction)}>
      <Input
        title='Category Name'
        name='category'
        register={register}
        errors={errors}
      />

      <p role='alert' className='text-red-500'>
        {errors["category"]?.message}
      </p>

      <div className='my-8'>
        <Button size='lg' title='Update Category' />
      </div>
    </form>
  );
};

export default UpdateCategoryUI;
