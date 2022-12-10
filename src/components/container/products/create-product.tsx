import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../redux/api/auth-api";
import { useGetAllCategoryQuery } from "../../../redux/api/category-api";
import { useGetAllDepartmentQuery } from "../../../redux/api/department-api";
import { useCreateNewProductMutation } from "../../../redux/api/product-api";
import {
  selectProductInput,
  setProductInput,
} from "../../../redux/features/product-slice";
import { createProductSchema } from "../../../schema";
import { ProductFormInput } from "../../../types/product";
import CreateProductUI from "../../ui/products/create-product-ui";

const CreateProduct = ({ closeModal }: any) => {
  const productInput = useSelector(selectProductInput);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProductSchema),
    defaultValues: {
      brand: productInput.brand,
      category: productInput.category,
      department: productInput.department,
      details: productInput.details,
      name: productInput.name,
      product_code: productInput.product_code,
      user: productInput.user,
      vendor: productInput.vendor,
    },
  });
  const [purchasedTime, setPurchasedTime] = useState(new Date());

  const { data: departments } = useGetAllDepartmentQuery([]);
  const { data: categories } = useGetAllCategoryQuery([]);
  const { data: users } = useGetAllUserQuery([]);

  const [createNewProduct, { error, isError, isSuccess }] =
    useCreateNewProductMutation();

  const onClictPlus = (link: string) => {
    const values = getValues();
    dispatch(setProductInput(values));
    navigate(link);
  };

  const createProductFunction = (data: ProductFormInput) => {
    const newData = {
      data: {
        name: data.name,
        product_code: data.product_code,
        brand: data.brand,
        details: data.details,
        purchasedAt: purchasedTime,
        vendor: data.vendor,
        usingBy: data.user,
        department: data.department,
        category: data.category,
      },
    };

    createNewProduct(newData);
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
      toast.success("Create Product Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });

      dispatch(
        setProductInput({
          brand: "",
          category: "",
          department: "",
          details: "",
          name: "",
          product_code: "",
          user: "",
          vendor: "",
        }),
      );
      closeModal();
    }
  }, [closeModal, dispatch, error, isError, isSuccess]);

  return (
    <CreateProductUI
      handleSubmit={handleSubmit}
      purchasedTime={purchasedTime}
      setPurchasedTime={setPurchasedTime}
      createProductFunction={createProductFunction}
      register={register}
      errors={errors}
      onClictPlus={onClictPlus}
      departments={departments?.data}
      categories={categories?.data}
      users={users}
    />
  );
};

export default CreateProduct;
