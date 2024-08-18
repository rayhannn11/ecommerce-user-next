'use client';

import { useEffect, useState } from 'react';
import ProductListComponent from '../ProductListComponent';
import axios from 'axios';

const BestSeller = ({ products }) => {
  const [populerProduct, setPopulerProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAndSortProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/products/get');
        const products = response.data;

        // Mengurutkan produk berdasarkan jumlah penjualan secara menurun
        const sortedProducts = products.sort((a, b) => b.sold - a.sold);

        setPopulerProduct(sortedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSortProducts();
    console.log(populerProduct);
  }, []);

  return (
    <div className='py-5 h-auto flex flex-col justify-center items-center mb-10'>
      <div className='flex w-[91%] gap-10 flex-col'>
        <h1 className='text-2xl font-bold'>Best Seller</h1>
        <div className=' flex flex-wrap items-center justify-center gap-10 '>
          {loading ? (
            <h1 className='text-2xl font-bold'>Loading...</h1>
          ) : (
            populerProduct
              ?.slice(0, 4)
              .map((product) => (
                <ProductListComponent key={product._id} product={product} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
