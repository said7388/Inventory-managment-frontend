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
    <div className='sm:max-w-2xl mx-auto'>
      <h2 className='text-2xl font-medium text-center mb-5'>
        Create new category
      </h2>
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

        <div className='my-8 w-full flex justify-end'>
          <Button size='sm' title='Create Category' />
        </div>
      </form>
    </div>
  );
};

export default CreateCategoryUI;
