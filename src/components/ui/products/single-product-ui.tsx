const SingleProductUI = ({ product }: any) => {
  return (
    <div>
      <p>Title: {product?.attributes?.name}</p>
      <p>About: {product?.attributes?.details}</p>
      <p>Brand: {product?.attributes?.brand}</p>
      <p>Code: {product?.attributes?.product_code}</p>
      <p>Vendor: {product?.attributes?.vendor}</p>
      <p>Category: {product?.attributes?.category?.data?.attributes?.name}</p>
      <p>
        Department: {product?.attributes?.department?.data?.attributes?.name}
      </p>
      <p>UsingBy: {product?.attributes?.usingBy?.data?.attributes?.fullName}</p>
    </div>
  );
};

export default SingleProductUI;
