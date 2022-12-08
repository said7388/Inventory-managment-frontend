import SingleProductUI from "../../ui/products/single-product-ui";

const SingleProduct = ({ currentProduct }: any) => {
  console.log(currentProduct);
  return (
    <>
      <SingleProductUI />
    </>
  );
};

export default SingleProduct;
