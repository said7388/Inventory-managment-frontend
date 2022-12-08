import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCreateNewCategoryMutation } from "../../../redux/api/category-api";
import { categoryFormSchema } from "../../../schema";
import CreateCategoryUI from "../../ui/category/create-category-ui";

const CreateCategory = ({ closeModal }: { closeModal: Function }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(categoryFormSchema) });

  const [createNewCategory, { error, isError, isSuccess }] =
    useCreateNewCategoryMutation();

  const createCategoryFunction = (data: { category: string }) => {
    createNewCategory({
      data: {
        name: data.category,
      },
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data?.error?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
    if (isSuccess) {
      toast.success("Create Category Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
      closeModal();
      reset();
    }
  }, [closeModal, error, isError, isSuccess, reset]);

  return (
    <CreateCategoryUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      createCategory={createCategoryFunction}
    />
  );
};

export default CreateCategory;
