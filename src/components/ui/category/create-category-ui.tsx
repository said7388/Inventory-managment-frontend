import { CreateCategoryPops } from "../../../types";
import Button from "../helper/button";
import Input from "../helper/input";

const CreateCategoryUI: React.FC<CreateCategoryPops> = ({
  register,
  errors,
  handleSubmit,
  createCategory,
}) => {
  return (
    <form onSubmit={handleSubmit(createCategory)}>
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
        <Button size='lg' title='Create Category' />
      </div>
    </form>
  );
};

export default CreateCategoryUI;
