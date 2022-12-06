import { useState } from "react";
import { useGetAllProductQuery } from "../../../redux/api/product-api";
import Modal from "../../ui/helper/modal";
import ProductsTable from "../../ui/products/products-table";
import CreateProduct from "./create-product";

const Products = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState({});

  const { data } = useGetAllProductQuery([]);

  const closeModal = () => {
    setAddModalOpen(false);
    setUpdateModalOpen(false);
  };

  console.log(data?.data);

  return (
    <>
      <ProductsTable setAddModalOpen={setAddModalOpen} products={data?.data} />
      <Modal
        title='Create new product'
        closeModal={closeModal}
        isOpen={isAddModalOpen}>
        <CreateProduct closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Products;
