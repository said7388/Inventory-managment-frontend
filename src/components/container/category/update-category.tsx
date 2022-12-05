import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useUpdateCategoryMutation } from "../../../redux/api/category-api";
import UpdateCategoryUI from "../../ui/category/update-category-ui";

const createCategorySchema = yup.object({
  category: yup.string().required("Category name is Required!"),
});

const UpdateCategory = ({ closeModal, currentCategory }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createCategorySchema),
    defaultValues: {
      category: currentCategory.name,
    },
  });

  const [updateCategory, { error, isError, isSuccess }] =
    useUpdateCategoryMutation();

  const updateCategoryFunction = (data: any) => {
    updateCategory({
      id: currentCategory.id,
      body: {
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
