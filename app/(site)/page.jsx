import Image from 'next/image';
import Featured from '../components/homepage/Featured';
import BrandLogo from '../components/homepage/BrandLogo';
import BestSeller from '../components/homepage/BestSeller';
import NewestProduct from '../components/homepage/NewestProduct';
import getProducts from '../actions/getProducts';

const homepage = () => {
  // const products = await getProducts();
  // console.log(products);

  return (
    <main className='min-h-full pt-20'>
      <Featured />
      <BrandLogo />
      {/* <BestSeller products={products} />
      <NewestProduct products={products} /> */}
      <BestSeller />
      <NewestProduct />
    </main>
  );
};

export default homepage;
