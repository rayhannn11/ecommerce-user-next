import EmptyState from '../../../components/order/EmptyState';
import getOrdersByEmail from '../../../actions/getOrderById';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
  var nf = new Intl.NumberFormat();
  console.log(params);
  const order = await getOrdersByEmail(params?.orderId);
  console.log(order);
  const status = order?.status;

  const statusClass = (index) => {
    if (index + status >= 0) return 'done';
    if (index + status === -1) return 'inProgress';
    if (index + status < -1) return 'undone';
  };

  if (order === 'undefined' || !order) {
    return (
      <div className='lg:pl-80 h-full'>
        <div className='h-full flex flex-col'>
          <EmptyState />
        </div>
      </div>
    );
  }
  return (
    <div className='lg:pl-80 h-full   pt-[10.5rem] justify-center p-[50px]'>
      <div className='w-full ml-[100px]'>
        {/* Table */}
        <div>
          <table className='w-4/5 text-center mt-5 mb-10'>
            <tr className=' text-xl'>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Telephone</th>
              <th>Total</th>
              <th>Keterangan</th>
            </tr>
            <tr className='text-lg'>
              <td>
                <span>{order?._id.slice(0, 5)}...</span>
              </td>
              <td>
                <span>{order?.customer}</span>
              </td>
              <td>
                <span>{order?.address.slice(0, 25)}...</span>
              </td>
              <td>
                <span>0{order?.telephone}</span>
              </td>
              <td>
                <span>Rp {nf.format(order?.total + 25000)}</span>
              </td>
              <td>
                <span>
                  {order?.paid < 2 ? (
                    <span className='text-[#e33c16] font-[bold]'>
                      Belum Bayar
                    </span>
                  ) : (
                    <span className='bg-[white] text-[teal] text-lg font-[bold] cursor-not-allowed mt-5 p-2 rounded-[30px]'>
                      Lunas
                    </span>
                  )}
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* Hr */}
        <div className='w-[90%] border mb-[30px] border-solid border-[#eae9e9]   mx-0 my-[30px] ]'></div>
        {/* Status */}
        <div className='w-2/5 flex justify-between ml-[380px] my-20'>
          <div className={statusClass(1)}>
            <Image src='/images/paid.png' width={30} height={30} alt='' />
            <span>Pemesanan</span>
            <div className='hidden'>
              <Image
                className='hidden'
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusClass(-1)}>
            <Image src='/images/packing.png' width={30} height={30} alt='' />
            <span>Sedang Dikemas</span>
            <div className='hidden'>
              <Image
                className='hidden'
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusClass(-2)}>
            <Image src='/images/bike.png' width={30} height={30} alt='' />
            <span>Dikirim</span>
            <div className='hidden'>
              <Image
                className='hidden'
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusClass(-2)}>
            <Image src='/images/delivered.png' width={30} height={30} alt='' />
            <span>Selesai</span>
            <div className='hidden'>
              <Image
                className='hidden'
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
        </div>
        {/* Product Buy Display */}
        <h2 className='text-2xl w-[18%] mb-5 border-b-black border-b border-solid'>
          Pesanan Anda
        </h2>
        <div className='flex flex-col justify-between'>
          {order?.products.map((item) => (
            <div
              className='flex justify-center items-center w-[90%] h-auto bg-[#f5f5f5d2] border border-neutral-200 mx-0 my-2.5 border-solid'
              key={item?._id}
            >
              <div className='flex-1 ml-5;'>
                <Image src={item?.img} alt='' width='140' height='140' />
              </div>

              <div className='flex-[3] flex flex-col'>
                <div className='font-bold text-lg cursor-pointer mb-[0.4rem]'>
                  <Link href={`/products/id/${item?.productId}`}>
                    {item?.title}
                  </Link>
                </div>
                <div className='flex gap-4 font-[lighter] text-base'>
                  {item?.categories?.map((categorie) => (
                    <p key={categorie}>
                      {categorie
                        .split(' ')
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join('')}{' '}
                    </p>
                  ))}
                </div>
                <div className='flex justify-between w-[30%] mt-6'>
                  <p className='text-md'>Size: {item?.selectedSize}</p>
                  <p className='text-md'>Quantity: {item?.quantity}</p>
                  <p> Rp. {nf.format(item?.price * item?.quantity)}</p>
                </div>
              </div>

              <div className='flex-1 flex gap-3 text-xl'>
                {order?.status >= 2 ? (
                  item?.isReview > 0 ? (
                    <p>Reviewed</p>
                  ) : (
                    <Link href={`/account/review/${item?.productId}`}>
                      <p className='py-3 px-5 text-white bg-[#FE6A16]  rounded-md'>
                        Review
                      </p>
                    </Link>
                  )
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
