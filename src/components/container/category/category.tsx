import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} from "../../../redux/api/category-api";
import CategoryUI from "../../ui/category/category-ui";
import Modal from "../../ui/helper/modal";
import UpdateCategory from "./update-category";

const Category = () => {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});

  const { data } = useGetAllCategoryQuery([]);
  const [deleteCategory, { error, isError, isSuccess }] =
    useDeleteCategoryMutation();

  const closeModal = () => {
    setUpdateModalOpen(false);
  };

  const handleDeleteCategory = (id: number) => {
    deleteCategory(id);
  };

  const onClickEditCategory = (data: any) => {
    setUpdateModalOpen(true);
    const category = {
      id: data?.id,
      name: data?.name,
    };
    setCurrentCategory(category);
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
      toast.success("Category Deleted Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  }, [error, isError, isSuccess]);

  return (
    <>
      <CategoryUI
        handleDeleteCategory={handleDeleteCategory}
        onClickEditCategory={onClickEditCategory}
        categories={data?.data}
      />

      <Modal
        title='Update category'
        closeModal={closeModal}
        isOpen={isUpdateModalOpen}>
        <UpdateCategory
          currentCategory={currentCategory}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default Category;
