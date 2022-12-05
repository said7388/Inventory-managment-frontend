import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useCreateUserMutation } from "../../redux/api/auth-api";
import { RegistrationFormInputs } from "../../types";
import RegistrationUI from "../ui/registration-ui";

const registerSchema = yup
  .object({
    email: yup
      .string()
      .email()
      .required("The provided email address format is not valid"),
    fullName: yup.string().required("Full Name is Required!"),
    username: yup.string().required("Username is Required!"),
    password: yup
      .string()
      .required("Password is Required!")
      .min(6, "Password length should be at least 6 characters"),
    confirm: yup
      .string()
      .required("Password is Required!")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
      confirm: "",
    },
  });

  const [createUser, { error, isError, isSuccess }] = useCreateUserMutation();

  const handleOnSubmit = (data: RegistrationFormInputs) => {
    const newUser = {
      email: data.email,
      employeeID: data.employeeID,
      fullName: data.fullName,
      username: data.username,
      mobileNumber: data.mobileNumber,
      password: data.password,
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
      />
    </>
  );
};

export default Registration;
