import Image from "next/image";
import getProducts from "../actions/getProducts";
import ProductsListComponent from "../components/ProductsListComponent";

const products = async () => {
  const products = await getProducts();

  return (
    <div className="min-h-full flex flex-col mb-[100px] p-4 md:p-6 lg:pl-16 relative">
      <img
        src="/images/all-products-banner.png"
        alt="All Products Banner"
        className="w-full h-[0rem] md:h-[18.75rem] lg:h-[24.75rem] object-cover"
      />
      <h1 className="pt-6 md:pt-10 text-2xl md:text-3xl font-bold">
        Semua Produk ({products.length})
      </h1>
      <ProductsListComponent products={products} />
    </div>
  );
};

export default products;
