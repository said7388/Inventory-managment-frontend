import { useGetSingleProductQuery } from "../../../redux/api/product-api";
import SingleProductUI from "../../ui/products/single-product-ui";

const SingleProduct = ({ currentProduct }: any) => {
  const { data } = useGetSingleProductQuery(currentProduct.id);

  return (
    <>
      <SingleProductUI product={data?.data} />
    </>
  );
};

export default SingleProduct;
