import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import LoginUI from "../components/ui/login-ui";
import { useSigninUserMutation } from "../redux/api/auth-api";
import { setToken, setUser } from "../redux/features/auth-slice";
import { RegistrationFormInputs } from "../types";
import { ROUTES } from "../utils/routes";

const schema = yup
  .object({
    email: yup
      .string()
      .email()
      .required("The provided email address format is not valid"),
    password: yup.string().required("Password is Required!"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [signinUser, { data, error, isError, isSuccess }] =
    useSigninUserMutation();

  const handleOnSubmit = ({ email, password }: RegistrationFormInputs) => {
    signinUser({ identifier: email, password: password });
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
      toast.success("Login Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
      const { email, id, username } = data?.user;
      dispatch(setToken({ token: data?.jwt }));
      dispatch(setUser({ profile: { email, id, username } }));
      reset();
      navigate(ROUTES.HOME);
    }
  }, [data, dispatch, error, isError, isSuccess, navigate, reset]);

  return (
    <>
      <LoginUI
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        handleOnSubmit={handleOnSubmit}
      />
    </>
  );
};

export default Login;
