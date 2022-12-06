import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userRegisterSchema } from "../../model/schema";
import { useCreateUserMutation } from "../../redux/api/auth-api";
import { useGetAllDepartmentQuery } from "../../redux/api/department-api";
import { RegistrationFormInputs } from "../../types";
import RegistrationUI from "../ui/registration-ui";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(userRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
      confirm: "",
    },
  });

  const { data: departments } = useGetAllDepartmentQuery([]);

  const [createUser, { error, isError, isSuccess }] = useCreateUserMutation();

  const handleOnSubmit = (data: RegistrationFormInputs) => {
    const newUser = {
      email: data.email,
      employeeID: data.employeeID,
      fullName: data.fullName,
      username: data.username,
      mobileNumber: data.mobileNumber,
      password: data.password,
      department: data.department,
    };
    createUser(newUser);
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
      toast.success("Create User Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });

      reset();
    }
  }, [error, isError, isSuccess, reset]);

  return (
    <>
      <RegistrationUI
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        handleOnSubmit={handleOnSubmit}
        departments={departments}
      />
    </>
  );
};

export default Registration;
