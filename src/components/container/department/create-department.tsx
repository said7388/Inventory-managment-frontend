import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateNewDepartmentMutation } from "../../../redux/api/department-api";
import { departmentFormSchema } from "../../../schema";
import CreateDepartmentUI from "../../ui/department/create-department-ui";

const CreateDepartment = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(departmentFormSchema) });

  const [createNewDepartment, { error, isError, isSuccess }] =
    useCreateNewDepartmentMutation();

  const createDepartmentFunction = (data: { department: string }) => {
    createNewDepartment({
      data: {
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
      toast.success("Create Department Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
      reset();
      navigate(-1);
    }
  }, [error, isError, isSuccess, navigate, reset]);

  return (
    <CreateDepartmentUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      createDepartmentFunction={createDepartmentFunction}
    />
  );
};

export default CreateDepartment;
