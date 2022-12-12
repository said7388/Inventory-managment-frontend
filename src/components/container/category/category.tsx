import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} from "../../../redux/api/category-api";
import CategoryUI from "../../ui/category/category-ui";
import DailogBox from "../../ui/helper/dailog";
import ModalBox from "../../ui/helper/modal";
import UpdateCategory from "./update-category";

const Category = () => {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteID, setDeleteID] = useState(0);
  const [currentCategory, setCurrentCategory] = useState({});

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = (id: number) => {
    setOpenDialog(true);
    setDeleteID(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const { data } = useGetAllCategoryQuery([]);
  const [deleteCategory, { error, isError, isSuccess }] =
    useDeleteCategoryMutation();

  const closeModal = () => {
    setUpdateModalOpen(false);
  };

  const handleDeleteCategory = () => {
    if (deleteID) {
      deleteCategory(deleteID);
    }
  };

  const onClickEditCategory = (data: any) => {
    setUpdateModalOpen(true);
    const category = {
      id: data?.id,
      name: data?.attributes?.name,
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
      setOpenDialog(false);
    }
  }, [error, isError, isSuccess]);

  return (
    <>
      <CategoryUI
        handleClickOpen={handleClickOpenDialog}
        onClickEditCategory={onClickEditCategory}
        categories={data?.data}
      />

      <ModalBox
        title='Update category'
        closeModal={closeModal}
        isOpen={isUpdateModalOpen}>
        <UpdateCategory
          currentCategory={currentCategory}
          closeModal={closeModal}
        />
      </ModalBox>

      <DailogBox
        open={openDialog}
        handleClose={handleCloseDialog}
        handleSuccess={handleDeleteCategory}
        message='Are you sure you want to delete this category ?'
        buttonTitle='Delete'
      />
    </>
  );
};

export default Category;
