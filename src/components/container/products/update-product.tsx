import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../redux/api/auth-api";
import { useGetAllCategoryQuery } from "../../../redux/api/category-api";
import { useGetAllDepartmentQuery } from "../../../redux/api/department-api";
import { useUpdateProductMutation } from "../../../redux/api/product-api";
import { createProductSchema } from "../../../schema";
import { ProductFormInput, UpdateProductPops } from "../../../types/product";
import UpdateProductUI from "../../ui/products/update-product-ui";

const UpdateProduct = ({ closeModal, currentProduct }: UpdateProductPops) => {
  console.log(currentProduct);
  const [purchasedTime, setPurchasedTime] = useState(
    new Date(currentProduct?.purchasedAt),
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProductSchema),
    defaultValues: {
      name: currentProduct?.name,
      product_code: currentProduct?.product_code,
      brand: currentProduct?.brand,
      vendor: currentProduct?.vendor,
      details: currentProduct?.details,
      department: currentProduct?.department?.id,
      category: currentProduct?.category?.id,
      user: currentProduct?.usingBy?.id,
    },
  });

  const { data: departments } = useGetAllDepartmentQuery([]);
  const { data: categories } = useGetAllCategoryQuery([]);
  const { data: users } = useGetAllUserQuery([]);

  const [updateProduct, { error, isError, isSuccess }] =
    useUpdateProductMutation();

  const updateProductFunction = (data: ProductFormInput) => {
    updateProduct({
      id: currentProduct.id,
      body: {
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
      toast.success("Product Updated Successfully!", {
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
    <UpdateProductUI
      register={register}
      departments={departments}
      categories={categories}
      users={users}
      handleSubmit={handleSubmit}
      purchasedTime={purchasedTime}
      setPurchasedTime={setPurchasedTime}
      errors={errors}
      updateProductFunction={updateProductFunction}
    />
  );
};

export default UpdateProduct;
