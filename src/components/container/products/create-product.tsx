import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../redux/api/auth-api";
import { useGetAllCategoryQuery } from "../../../redux/api/category-api";
import { useGetAllDepartmentQuery } from "../../../redux/api/department-api";
import { useCreateNewProductMutation } from "../../../redux/api/product-api";
import CreateProductUI from "../../ui/products/create-product-ui";

const CreateProduct = ({ closeModal }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [purchasedTime, setPurchasedTime] = useState(new Date());

  const { data: departments } = useGetAllDepartmentQuery([]);
  const { data: categories } = useGetAllCategoryQuery([]);
  const { data: users } = useGetAllUserQuery([]);

  const [createNewProduct, { error, isError, isSuccess }] =
    useCreateNewProductMutation();

  const createDepartmentFunction = (data: {
    name: string;
    product_code: string;
    brand: string;
    details: string;
    purchasedAt: string;
    vendor: string;
    user: string;
    department: string;
    category: string;
  }) => {
    const newData = {
      data: {
        name: data.name,
        product_code: data.product_code,
        brand: data.brand,
        details: data.details,
        purchasedAt: data.purchasedAt,
        vendor: data.vendor,
        usingBy: {
          id: data.user,
        },
        department: {
          id: data.department,
        },
        category: {
          id: data.category,
        },
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
      closeModal();
      reset();
    }
  }, [closeModal, error, isError, isSuccess, reset]);
  return (
    <CreateProductUI
      handleSubmit={handleSubmit}
      purchasedTime={purchasedTime}
      setPurchasedTime={setPurchasedTime}
      createDepartmentFunction={createDepartmentFunction}
      register={register}
      errors={errors}
      departments={departments?.data}
      categories={categories?.data}
      users={users}
    />
  );
};

export default CreateProduct;
