import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateCategoryMutation } from "../../../redux/api/category-api";
import { categoryFormSchema } from "../../../schema";
import { UpdateCategoryPops } from "../../../types";
import UpdateCategoryUI from "../../ui/category/update-category-ui";

const UpdateCategory = ({
  closeModal,
  currentCategory,
}: UpdateCategoryPops) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: {
      category: currentCategory.name,
    },
  });

  const [updateCategory, { error, isError, isSuccess }] =
    useUpdateCategoryMutation();

  const updateCategoryFunction = (data: { category: string }) => {
    updateCategory({
      id: currentCategory.id,
      body: {
        data: {
          name: data.category,
        },
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
      toast.success("Update Category Successfully!", {
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
    <UpdateCategoryUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      updateCategoryFunction={updateCategoryFunction}
    />
  );
};

export default UpdateCategory;
