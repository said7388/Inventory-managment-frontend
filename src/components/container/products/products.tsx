import { useGetAllProductQuery } from "../../../redux/api/product-api";
import ProductsTable from "../../ui/products/products-table";

const Products = () => {
  const { data } = useGetAllProductQuery([]);

  console.log(data?.data);

  return (
    <div className='p-8'>
      <ProductsTable products={data?.data} />
    </div>
  );
};

export default Products;
