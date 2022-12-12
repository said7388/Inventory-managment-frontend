import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useDeleteDepartmentMutation,
  useGetAllDepartmentQuery,
} from "../../../redux/api/department-api";
import DepartmentUI from "../../ui/department/department-ui";
import DailogBox from "../../ui/helper/dailog";
import Modal from "../../ui/helper/modal";
import UpdateDepartment from "./update-department";

const Department = () => {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState({});
  const [deleteID, setDeleteID] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const { data } = useGetAllDepartmentQuery([]);
  const [deleteDepartment, { error, isError, isSuccess }] =
    useDeleteDepartmentMutation();
  const handleClickOpenDialog = (id: number) => {
    setOpenDialog(true);
    setDeleteID(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const closeModal = () => {
    setUpdateModalOpen(false);
  };

  const handleDeleteDepartment = () => {
    if (deleteID) {
      deleteDepartment(deleteID);
    }
  };

  const onClickEditDepartment = (data: any) => {
    setUpdateModalOpen(true);
    const department = {
      id: data?.id,
      name: data?.attributes?.name,
    };
    setCurrentDepartment(department);
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
      toast.success("Department Deleted Successfully!", {
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
      <DepartmentUI
        handleClickOpenDialog={handleClickOpenDialog}
        onClickEditDepartment={onClickEditDepartment}
        departments={data?.data}
      />
      <Modal
        title='Update department'
        closeModal={closeModal}
        isOpen={isUpdateModalOpen}>
        <UpdateDepartment
          currentDepartment={currentDepartment}
          closeModal={closeModal}
        />
      </Modal>
      <DailogBox
        open={openDialog}
        handleClose={handleCloseDialog}
        handleSuccess={handleDeleteDepartment}
        message='Are you sure you want to delete this department ?'
        buttonTitle='Delete'
      />
    </>
  );
};

export default Department;
