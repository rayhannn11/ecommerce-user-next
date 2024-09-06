import getProduct from "../../../actions/getProduct";
import getReview from "../../../actions/getReview";

import SingleProduct from "../../../components/productId/SingleProduct";
import ReviewProduct from "../../../components/productId/ReviewProduct";

const product = async ({ params }) => {
  const product = await getProduct(params.productId);
  const reviews = await getReview(params.productId);

  return (
    <div className="py-10 px-3 w-full h-auto min-h-full flex flex-col items-center justify-center pt-10 gap-10">
      <SingleProduct product={product} />
      <ReviewProduct reviews={reviews} />
    </div>
  );
};

export default product;
