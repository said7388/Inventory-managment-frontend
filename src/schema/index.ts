import * as yup from "yup";

export const departmentFormSchema = yup.object({
  department: yup.string().required("Department name is Required!"),
});

export const categoryFormSchema = yup.object({
  category: yup.string().required("Category name is Required!"),
});

export const userRegisterSchema = yup
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

export const userLoginSchema = yup
  .object({
    email: yup
      .string()
      .email()
      .required("The provided email address format is not valid"),
    password: yup.string().required("Password is Required!"),
  })
  .required();

export const createProductSchema = yup.object({
  name: yup.string().required("Name name is Required!"),
  product_code: yup.string(),
  brand: yup.string(),
  vendor: yup.string(),
  details: yup.string(),
  department: yup.string().required("Department is Required!"),
  category: yup.string().required("Category is Required!"),
  user: yup.string().required("User name is Required!"),
});
