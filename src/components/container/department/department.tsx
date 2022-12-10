import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useDeleteDepartmentMutation,
  useGetAllDepartmentQuery,
} from "../../../redux/api/department-api";
import DepartmentUI from "../../ui/department/department-ui";
import Modal from "../../ui/helper/modal";
import UpdateDepartment from "./update-department";

const Department = () => {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState({});

  const { data } = useGetAllDepartmentQuery([]);

  console.log(data);

  const [deleteDepartment, { error, isError, isSuccess }] =
    useDeleteDepartmentMutation();

  const closeModal = () => {
    setUpdateModalOpen(false);
  };

  const handleDeleteDepartment = (id: number) => {
    deleteDepartment(id);
  };

  const onClickEditDepartment = (data: any) => {
    setUpdateModalOpen(true);
    const department = {
      id: data?.id,
      name: data?.name,
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
    }
  }, [error, isError, isSuccess]);

  return (
    <>
      <DepartmentUI
        handleDeleteDepartment={handleDeleteDepartment}
        onClickEditDepartment={onClickEditDepartment}
        departments={data}
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
    </>
  );
};

export default Department;
