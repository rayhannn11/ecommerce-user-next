import React from "react";
import getProductsByCategorie from "../../../actions/getProductsByCategorie";
import ProductsListComponent from "../../../components/ProductsListComponent";

const page = async ({ params }) => {
  const { categories } = params;
  const products = await getProductsByCategorie(categories);

  return (
    <div className=" w-full h-auto  py-36 min-h-full">
      <div className="pl-20 pt-14 flex flex-col ">
        <h1 className="text-3xl font-bold">
          Sepatu{" "}
          {categories
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("")}{" "}
          ({products.length})
        </h1>
        <ProductsListComponent
          productsCategorie={products}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default page;
