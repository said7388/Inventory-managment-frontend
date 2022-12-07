import ProductsTable from "../products/products-table";

const SingleCategoryUI = ({ data }: any) => {
  const products = data?.attributes?.products?.data;

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold uppercase'>
        {data?.attributes?.name}
      </h1>
      <ProductsTable editable={false} products={products} />
    </div>
  );
};

export default SingleCategoryUI;
