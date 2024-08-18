import React from "react";

const About = () => {
  return (
    <div className="h-auto p-[40px] mb-10 flex items-center justify-center flex-col w-full pt-36 ">
      <div className="h-full w-[50rem]">
        <div className="flex min-h-screen flex-col justify-center items-center flex-2">
          <h1 className="text-3xl py-6 font-bold">
            Halo! Saya <i>SNEAKER</i>
          </h1>
          <p className="text-xl mb-6  ">
            {" "}
            Kami adalah sebuah toko yang menawarkan koleksi sepatu premium
            quality yang dijamin akan memuaskan pelanggan. Dari sepatu formal
            hingga sepatu casual, toko kami memiliki berbagai jenis sepatu dari
            brand terkenal seperti adidas, nike, converse, vans dan masih banyak
            lagi. Sepatu yang dijual di toko kami dibuat dari bahan berkualitas
            sehingga sepatu yang dijual tahan lama dan terasa premium. Selain
            itu, toko kami juga menawarkan berbagai pilihan warna dan ukuran
            untuk memastikan bahwa setiap pelanggan dapat menemukan sepatu yang
            sesuai dengan kebutuhan mereka. Tidak hanya itu, kami juga
            menyediakan pelayanan yang ramah dan profesional untuk memberikan
            pengalaman berbelanja yang menyenangkan bagi pelanggan. Jadi, jika
            Anda mencari sepatu premium quality dengan desain yang elegan dan
            kualitas yang terjamin, Silahkan kunjungi toko Kami dan temukan
            sepatu yang sesuai dengan gaya Anda.
          </p>
          <div className="mb-10">
            <h1 className="text-2xl py-6 font-bold">Feedback </h1>
            <p className="text-xl mb-6">
              {" "}
              Kamu bisa memberi kami masukan, saran dan pertanyaan dengan
              menghubungi whatsapp kami +62 823-8641-6545. Feedback dari kalian
              membantu kami untuk memahami kebutuhan dan harapan yang kalian
              butuhkan, sehingga kami dapat memberikan pelayanan yang lebih baik
              lagi. <i>"Hormat kami SNEAKER."</i>
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col flex-3 bg-[##f9fafb] p-[20px] h-auto">
            <h1 className="text-2xl py-6 font-bold mb-3 text-center">
              Pertanyaan yang sering diajukan
            </h1>
            <div className="my-[20px] border-b-[3px] border-[##e5e7eb] w-full" />

            <div className="flex justify-between mb-6">
              <div className="flex justify-between ">
                <div className="w-[90%]">
                  <h3 className="text-xl font-bold mb-3">
                    Seperti apa <i>SNEAKER</i>?
                  </h3>
                  <p className="text-[18px]">
                    {" "}
                    <i>SNEAKER</i> adalah sebuah toko sepatu yang menjual sepatu
                    premium dari brand terkenal seperti adidas, nike, converse,
                    vans dan masih banyak lagi.
                  </p>
                </div>
              </div>
              <div className="mr-[20px] text-2xl font-bold">
                <span>^</span>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between mb-6">
              <div className="flex justify-between ">
                <div className="w-[90%]">
                  <h3 className="text-xl font-bold mb-3">
                    Bagaimana cara membeli di <i>SNEAKER</i>?
                  </h3>
                  <p className="text-[18px]">
                    {" "}
                    Ada dua cara dalam memesan di ari store. Petama kamu bisa
                    memesan menggunakan aplikasi, dimana kami menggunakan{" "}
                    <i>Cash on Delivery</i> sebagai media pembayaran. Kedua kamu
                    bisa mengunjungi toko kami langsung, Kamu bisa membayar
                    secara tunai, ovo, qrish ataupun debit.
                  </p>
                </div>
              </div>
              <div className="mr-[20px] text-2xl font-bold">
                <span>^</span>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between mb-6">
              <div className="flex justify-between ">
                <div className="w-[90%]">
                  <h3 className="text-xl font-bold mb-3">
                    Dimana saya bisa mengunjungi <i>SNEAKER</i> secara langsung
                    ?
                  </h3>
                  <p className="text-[18px]">
                    {" "}
                    <i>SNEAKER</i> berletak di Jl. Raya Bogor No.KM.24 No.40,
                    RT.6/RW.1, Susukan, Kec. Ciracas, Kota Jakarta Timur, Daerah
                    Khusus Ibukota Jakarta 13770.
                  </p>
                </div>
              </div>
              <div className="mr-[20px] text-2xl font-bold">
                <span>^</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
