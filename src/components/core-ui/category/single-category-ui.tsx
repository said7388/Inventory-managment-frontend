import ProductsTable from "../products/products-table";

const SingleCategoryUI = ({ data }: any) => {
  const products = data?.products;

  return (
    <div>
      <h1 className='text-center text-2xl mb-3 font-semibold uppercase'>
        {data?.name}
      </h1>
      <ProductsTable editable={false} products={products} />
    </div>
  );
};

export default SingleCategoryUI;
