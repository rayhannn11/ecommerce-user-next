"use client";
import { useState, useEffect, useCallback } from "react";
import ProductListComponent from "../components/ProductListComponent";
import axios from "axios";

const ProductsListComponent = ({ products, productsCategorie, categories }) => {
  const [productsArr, setProductsArr] = useState(products || []);
  const [filters, setFilters] = useState("All");
  const [sizeState, setSizeState] = useState("All");
  const [sortState, setSortState] = useState("");
  const [loading, setIsLoading] = useState(false);

  // Initial Value Radio Input
  const brand = ["All", "Nike", "Adidas", "Converse", "Vans", "New Balance"];
  const numberSize = [
    "All",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
  ];
  const sortInitValue = ["termurah", "termahal", "terlaris"];

  useEffect(() => {
    if (filters || sizeState) {
      setIsLoading(true);
      axios
        .get("/api/products/filters", {
          params: {
            brand: filters,
            size: sizeState,
            categories,
          },
        })
        .then((res) => setProductsArr(res.data))
        .finally(setIsLoading(false));
    }
    return;
  }, [filters, sizeState]);

  const handleSort = useCallback(() => {
    if (sortState === "termurah") {
      setProductsArr((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sortState === "termahal") {
      setProductsArr((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      {
        setProductsArr((prev) => [...prev].sort((a, b) => b.sold - a.sold));
      }
    }
  }, [sortState, productsArr]);

  useEffect(() => {
    !!sortState && handleSort();
  }, [sortState]);

  return (
    <div className="flex flex-col md:flex-row items-start">
      {/* Filter Section */}
      <div className="flex flex-col gap-4 w-full md:w-[25%] lg:w-[20%] sticky top-0 z-10 bg-white mb-10">
        <h1 className="text-lg font-semibold">Filter By Brand</h1>
        <div className="flex flex-wrap mb-3">
          {brand.map((brand) => (
            <div
              className="flex items-center gap-2 mb-3 text-lg mr-4"
              key={brand}
            >
              <input
                type="checkbox"
                id={brand}
                name="brand"
                value={brand}
                checked={brand === filters}
                className="w-5 h-5 cursor-pointer"
                onChange={(e) => setFilters(e.target.value)}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
        <h1 className="text-lg font-semibold">Filter By Size</h1>
        <div className="flex flex-wrap mb-3">
          {numberSize.map((size) => (
            <div
              className="flex items-center gap-2 mb-3 text-lg mr-4"
              key={size}
            >
              <input
                type="checkbox"
                id={size}
                name="size"
                value={size}
                checked={size === sizeState}
                className="w-5 h-5 cursor-pointer"
                onChange={(e) => setSizeState(e.target.value)}
              />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
        <h1 className="text-lg font-semibold">Filter By Sort</h1>
        <div className="flex flex-wrap mb-3">
          {sortInitValue.map((sort) => (
            <div
              className="flex items-center gap-2 mb-3 text-lg mr-4"
              key={sort}
            >
              <input
                type="checkbox"
                id={sort}
                name="sort"
                value={sort}
                checked={sort === sortState}
                className="w-5 h-5 cursor-pointer"
                onClick={(e) => setSortState(e.target.value)}
              />
              <label htmlFor={sort}>{sort}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Product List Section */}
      <div className="flex flex-wrap justify-center items-center w-full md:w-[75%] lg:w-[80%] px-4 md:px-10 gap-4 pt-12">
        {loading ? (
          <div>Loading...</div>
        ) : productsArr && productsArr.length > 0 ? (
          productsArr.map((product) => (
            <ProductListComponent product={product} key={product._id} />
          ))
        ) : (
          <div>
            <img src="/images/no-product.png" alt="no-product" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsListComponent;
