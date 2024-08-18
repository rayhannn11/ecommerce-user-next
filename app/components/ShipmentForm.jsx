'use client';
import axios from 'axios';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useCartStore from '../hooks/useCartTotal';
import { useSession } from 'next-auth/react';

const ShipmentForm = ({ cart, userEmail }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { totalCart } = useCartStore();
  const session = useSession();
  const router = useRouter();

  const handleForm = async (ev) => {
    ev.preventDefault();

    if (customer && address && telephone) {
      try {
        setIsLoading(true);

        const data = {
          email: userEmail,
          customer,
          products: cart?.map((item) => ({
            productId: item?.productId,
            title: item?.title,
            img: item?.img,
            categories: item?.categories,
            brand: item?.brand,
            price: item?.price,
            quantity: item?.quantityItem,
            selectedSize: item?.selectedSize,
          })),
          address,
          telephone: parseInt(telephone),
          total: totalCart,
        };

        const res = await axios.post('/api/orders/add', data);

        console.log(res.status);
        if (res.status === 200) {
          try {
            router.push(`/account/orders/${session?.data?.user?.email}`);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error('Harap Isi Data Pengiriman');
    }
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6' onSubmit={handleForm}>
          {/*Customer Name  */}
          <div>
            <label
              htmlFor='customer'
              className='
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        '
            >
              Nama Customer
            </label>
            <div className='mt-2'>
              <input
                id='customer'
                disabled={isLoading}
                className={clsx(
                  `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6`,
                  isLoading && 'opacity-50 cursor-default'
                )}
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor='address'
              className='
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        '
            >
              Alamat Pengiriman
            </label>
            <div className='mt-2'>
              <input
                id='address'
                disabled={isLoading}
                className={clsx(
                  `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6`,
                  isLoading && 'opacity-50 cursor-default'
                )}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          {/* Telephone */}
          <div>
            <label
              htmlFor='telephone'
              className='
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        '
            >
              Telephone
            </label>
            <div className='mt-2'>
              <input
                id='telephone'
                disabled={isLoading}
                className={clsx(
                  `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6`,
                  isLoading && 'opacity-50 cursor-default'
                )}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
          </div>
          {/* Button */}
          <div>
            <button
              type='submit'
              className='mt-4 p-3 w-full font-bold rounded-md text-white bg-[#111] active:bg-[#000] flex justify-center items-center gap-4'
            >
              {isLoading ? 'Loading...' : 'Konfirmasi Pembelian'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipmentForm;
