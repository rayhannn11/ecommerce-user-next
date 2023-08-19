import getProduct from "../../../actions/getProduct";

import SingleProduct from "../../../components/productId/SingleProduct";

const product = async ({ params }) => {
  const product = await getProduct(params.productId);

  return (
    <div className="py-10 px-3 w-full h-auto min-h-full gap-10  flex items-center justify-center pt-44">
      <SingleProduct product={product} />
    </div>
  );
};

export default product;
