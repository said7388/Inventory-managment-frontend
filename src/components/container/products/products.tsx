import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../../redux/api/product-api";
import { ProductType } from "../../../types/product";
import DailogBox from "../../ui/helper/dailog";
import ModalBox from "../../ui/helper/modal";
import ProductsTable from "../../ui/products/products-table";
import CreateProduct from "./create-product";
import SingleProduct from "./single-product";
import UpdateProduct from "./update-product";

const Products = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [deleteID, setDeleteID] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const { data } = useGetAllProductQuery([]);
  const [deleteProduct, { error, isError, isSuccess }] =
    useDeleteProductMutation();

  const handleClickOpenDialog = (id: number) => {
    setOpenDialog(true);
    setDeleteID(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const closeModal = () => {
    setAddModalOpen(false);
    setViewModalOpen(false);
    setUpdateModalOpen(false);
  };

  const handleDeleteProduct = () => {
    if (deleteID) {
      deleteProduct(deleteID);
    }
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
      setOpenDialog(false);
    }
  }, [error, isError, isSuccess]);

  return (
    <>
      <ProductsTable
        handleClickOpenDialog={handleClickOpenDialog}
        onClickEditProduct={onClickEditProduct}
        setAddModalOpen={setAddModalOpen}
        onClickViewProduct={onClickViewProduct}
        products={data?.data}
      />
      <ModalBox
        title='Product Details'
        width='50%'
        closeModal={closeModal}
        isOpen={viewModalOpen}>
        <SingleProduct currentProduct={currentProduct} />
      </ModalBox>
      <ModalBox
        title='Create new product'
        closeModal={closeModal}
        width='50%'
        isOpen={isAddModalOpen}>
        <CreateProduct closeModal={closeModal} />
      </ModalBox>
      <ModalBox
        title='Update Product'
        width='50%'
        closeModal={closeModal}
        isOpen={isUpdateModalOpen}>
        <UpdateProduct
          currentProduct={currentProduct}
          closeModal={closeModal}
        />
      </ModalBox>
      <DailogBox
        open={openDialog}
        handleClose={handleCloseDialog}
        handleSuccess={handleDeleteProduct}
        message='Are you sure you want to delete this product ?'
        buttonTitle='Delete'
      />
    </>
  );
};

export default Products;
