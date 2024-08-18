'use client';
import axios from 'axios';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import useCartTotal from '../hooks/useCartTotal';

const RightCart = ({ total, email, cart }) => {
  var nf = new Intl.NumberFormat();
  const router = useRouter();
  const { setTotalCart } = useCartTotal();

  const deleteProducts = (userEmail) => {
    function deleteSucces() {
      toast.success('Cart Has Been Removed');
      router.refresh();
    }
    axios
      .delete('/api/cart/delete', {
        data: { userEmail },
      })
      .then(() => deleteSucces())
      .catch((err) => toast.error('Something went wrong'));
  };

  const goToShipment = (total) => {
    setTotalCart(total);
    router.push('/account/shipment');
  };

  return (
    <div className=' w-full max-h-[400px] flex flex-col justify-end text-black ml-[50px] '>
      <h2 className='font-medium text-xl mb-5'>TOTAL BELANJA</h2>
      <div className='flex justify-between'>
        <p className=' text-lg mb-2.5'>Subtotal:</p>
        {cart.length === 0 ? ' Rp. 0.00' : ` Rp. ${nf.format(total)}`}
      </div>
      <div className='flex justify-between'>
        <p className=' text-lg mb-2.5'>Estimasi Biaya Pengiriman:</p>
        {cart.length === 0 ? ' Rp. 0.00' : `Rp. 25,000`}
      </div>
      <div className='flex justify-between'>
        <p className=' text-lg mb-2.5'>Total:</p>
        {cart.length === 0 ? ' Rp. 0.00' : ` Rp. ${nf.format(total + 25000)} `}
      </div>
      <div className='border mx-0 my-2.5 border-solid border-[#cccbcb]'></div>
      {/* Button */}
      {cart.length === 0 ? (
        <button
          className={
            'bg-neutral-100 text-[#9e9b9b] font-[bold] mt-5 p-5 rounded-[30px] border-[none] cursor-default'
          }
        >
          CHECKOUT SEKARANG
        </button>
      ) : (
        <button
          className={
            'bg-[#111111] text-[white] font-[bold] cursor-pointer mt-5 p-5 rounded-[30px] border-[none] active:bg-[#030303]'
          }
          onClick={() => goToShipment(total)}
        >
          CHECKOUT SEKARANG
        </button>
      )}
      <button
        className={clsx(
          cart.length === 0
            ? 'bg-neutral-100 text-[#9e9b9b] font-[bold] mt-5 p-5 rounded-[30px] border-[none] cursor-default'
            : 'border bg-transparent text-[#c91515] text-base cursor-pointer mt-[30px] p-2.5 rounded-[30px] border-solid border-[#c91515] hover:bg-[#c91515] hover:text-[#fff] active:bg-[rgb(142,11,11)] active:text-[#fff]'
        )}
        onClick={() => deleteProducts(email)}
      >
        BERSIHKAN KERANJANG BELANJA
      </button>
    </div>
  );
};

export default RightCart;
