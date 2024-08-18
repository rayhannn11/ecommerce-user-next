import Image from 'next/image';
import getProducts from '../actions/getProducts';
import ProductsListComponent from '../components/ProductsListComponent';

const products = async () => {
  const products = await getProducts();

  return (
    <div className='min-h-full flex flex-col mb-[100px] p-6 pl-16  relative pt-36'>
      <img
        src='/images/all-products-banner.png'
        alt=''
        className='w-full h-[18.75rem] object-fill'
      />
      <h1 className='pt-10 text-3xl font-bold'>
        Semua Products ({products.length})
      </h1>
      <ProductsListComponent products={products} />
    </div>
  );
};

export default products;
