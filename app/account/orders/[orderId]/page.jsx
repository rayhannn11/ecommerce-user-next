import EmptyState from "../../../components/order/EmptyState";
import getOrdersByEmail from "../../../actions/getOrderById";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  var nf = new Intl.NumberFormat();
  console.log(params);
  const order = await getOrdersByEmail(params?.orderId);
  console.log(order);
  const status = order?.status;

  const statusClass = (index) => {
    if (index + status >= 0) return "done";
    if (index + status === -1) return "inProgress";
    if (index + status < -1) return "undone";
  };

  if (order === "undefined" || !order) {
    return (
      <div className="h-[40rem] flex flex-col">
        <EmptyState />
      </div>
    );
  }
  return (
    <div className="h-full flex flex-col items-center justify-center p-5 md:py-20">
      <div className="w-full lg:ml-[100px]">
        {/* Table */}
        <div className="overflow-x-auto lg:ml-[100px]">
          <table className="w-full lg:w-4/5 text-center mt-5 mb-10 flex items-center justify-center border border-[#828282] md:border-none md:flex-col md:items-stretch">
            <thead>
              <tr className="flex flex-col md:flex-row  items-center justify-between text-base lg:text-xl gap-3 text-center">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>Total</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex flex-col md:flex-row items-center justify-between text-sm lg:text-lg gap-3 text-center">
                <td>{order?._id.slice(0, 5)}...</td>
                <td>{order?.customer}</td>
                <td>{order?.address.slice(0, 25)}...</td>
                <td>0{order?.telephone}</td>
                <td>Rp {nf.format(order?.total + 25000)}</td>
                <td>
                  {order?.paid < 2 ? (
                    <span className="text-[#e33c16] font-bold">
                      Belum Bayar
                    </span>
                  ) : (
                    <span className="bg-white text-teal-600 text-lg font-bold cursor-not-allowed mt-5  rounded-lg">
                      Lunas
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hr */}
        <div className="w-full lg:w-[90%] border mb-[30px] border-solid border-[#eae9e9] mx-0 my-[30px]"></div>

        {/* Status */}
        <div className="w-full lg:w-2/5 flex flex-col lg:flex-row items-center justify-between lg:ml-[300px] my-20 gap-8">
          <div className={statusClass(1)}>
            <Image src="/images/paid.png" width={30} height={30} alt="" />
            <span>Pemesanan</span>
          </div>
          <div className={statusClass(-1)}>
            <Image src="/images/packing.png" width={30} height={30} alt="" />
            <span>Sedang Dikemas</span>
          </div>
          <div className={statusClass(-2)}>
            <Image src="/images/bike.png" width={30} height={30} alt="" />
            <span>Dikirim</span>
          </div>
          <div className={statusClass(-2)}>
            <Image src="/images/delivered.png" width={30} height={30} alt="" />
            <span>Selesai</span>
          </div>
        </div>

        {/* Product Buy Display */}
        <h2 className="text-2xl w-full lg:w-[18%] mb-5 border-b-black border-b border-solid">
          Pesanan Anda
        </h2>
        <div className="flex flex-col space-y-4">
          {order?.products.map((item) => (
            <div
              className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[90%] h-auto bg-[#f5f5f5d2] border border-neutral-200 mx-0 my-2.5 border-solid p-4"
              key={item?._id}
            >
              <div className="flex-1 lg:ml-5 mb-4 lg:mb-0">
                <Image src={item?.img} alt="" width="140" height="140" />
              </div>
              <div className="flex-[3] flex flex-col items-start justify-between mb-10 md:mb-0">
                <div className="font-bold text-lg cursor-pointer mb-2">
                  <Link href={`/products/id/${item?.productId}`}>
                    {item?.title}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-4 font-light text-base">
                  {item?.categories?.map((categorie) => (
                    <p key={categorie}>
                      {categorie
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between w-full lg:w-[60%] mt-6 gap-8">
                  <p className="text-md">Size: {item?.selectedSize}</p>
                  <p className="text-md">Quantity: {item?.quantity}</p>
                  <p>Rp. {nf.format(item?.price * item?.quantity)}</p>
                </div>
              </div>
              <div className="flex-1 flex gap-3 text-xl mt-4 lg:mt-0">
                {order?.status >= 2 &&
                  (item?.isReview > 0 ? (
                    <p>Reviewed</p>
                  ) : (
                    <Link href={`/account/review/${item?.productId}`}>
                      <p className="py-3 px-5 text-white bg-[#FE6A16] rounded-md">
                        Review
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
