import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../../redux/api/product-api";
import { ProductType } from "../../../types/product";
import Modal from "../../ui/helper/modal";
import ProductsTable from "../../ui/products/products-table";
import CreateProduct from "./create-product";
import SingleProduct from "./single-product";
import UpdateProduct from "./update-product";

const Products = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const { data } = useGetAllProductQuery([]);

  const [deleteProduct, { error, isError, isSuccess }] =
    useDeleteProductMutation();

  const closeModal = () => {
    setAddModalOpen(false);
    setViewModalOpen(false);
    setUpdateModalOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
  };

  const onClickEditProduct = (product: ProductType) => {
    setUpdateModalOpen(true);
    setCurrentProduct(product);
  };

  const onClickViewProduct = (product: ProductType) => {
    setViewModalOpen(true);
    setCurrentProduct(product);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data?.error?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
    if (isSuccess) {
      toast.success("Product Deleted Successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  }, [error, isError, isSuccess]);

  return (
    <>
      <ProductsTable
        handleDeleteProduct={handleDeleteProduct}
        onClickEditProduct={onClickEditProduct}
        setAddModalOpen={setAddModalOpen}
        onClickViewProduct={onClickViewProduct}
        products={data}
      />
      <Modal
        title='Product Details'
        closeModal={closeModal}
        isOpen={viewModalOpen}>
        <SingleProduct currentProduct={currentProduct} />
      </Modal>
      <Modal
        title='Create new product'
        closeModal={closeModal}
        isOpen={isAddModalOpen}>
        <CreateProduct closeModal={closeModal} />
      </Modal>
      <Modal
        title='Update Product'
        closeModal={closeModal}
        isOpen={isUpdateModalOpen}>
        <UpdateProduct
          currentProduct={currentProduct}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default Products;
