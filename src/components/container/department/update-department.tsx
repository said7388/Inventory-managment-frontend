import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateDepartmentMutation } from "../../../redux/api/department-api";
import { UpdateDepartmentPops } from "../../../types";
import { departmentFormSchema } from "../../../validator/schema";
import UpdateDepartmentUI from "../../core-ui/department/update-department-ui";

const UpdateDepartment = ({
  closeModal,
  currentDepartment,
}: UpdateDepartmentPops) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(departmentFormSchema),
    defaultValues: {
      department: currentDepartment.name,
    },
  });

  const [updateDepartment, { error, isError, isSuccess }] =
    useUpdateDepartmentMutation();

  const updateDepartmentFunction = (data: { department: string }) => {
    updateDepartment({
      id: currentDepartment.id,
      body: {
        name: data.department,
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
      toast.success("Update Department Successfully!", {
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
    <UpdateDepartmentUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      updateDepartmentFunction={updateDepartmentFunction}
    />
  );
};

export default UpdateDepartment;
