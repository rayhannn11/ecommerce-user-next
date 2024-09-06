import React from "react";

const About = () => {
  return (
    <div className="h-auto p-5 md:p-10 mb-10 flex items-center justify-center flex-col w-full">
      <div className="h-full w-full max-w-[50rem]">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-2xl md:text-3xl py-6 font-bold pt-10 text-center">
            Halo! Saya <i>SNEAKER</i>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 text-center leading-relaxed">
            Kami adalah sebuah toko yang menawarkan koleksi sepatu premium
            quality yang dijamin akan memuaskan pelanggan. Dari sepatu formal
            hingga sepatu casual, toko kami memiliki berbagai jenis sepatu dari
            brand terkenal seperti Adidas, Nike, Converse, Vans, dan masih
            banyak lagi. Sepatu yang dijual di toko kami dibuat dari bahan
            berkualitas sehingga sepatu yang dijual tahan lama dan terasa
            premium. Selain itu, toko kami juga menawarkan berbagai pilihan
            warna dan ukuran untuk memastikan bahwa setiap pelanggan dapat
            menemukan sepatu yang sesuai dengan kebutuhan mereka. Tidak hanya
            itu, kami juga menyediakan pelayanan yang ramah dan profesional
            untuk memberikan pengalaman berbelanja yang menyenangkan bagi
            pelanggan. Jadi, jika Anda mencari sepatu premium quality dengan
            desain yang elegan dan kualitas yang terjamin, silakan kunjungi toko
            Kami dan temukan sepatu yang sesuai dengan gaya Anda.
          </p>
          <div className="mb-10 w-full">
            <h1 className="text-xl md:text-2xl py-6 font-bold text-center">
              Feedback
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-center">
              Kamu bisa memberi kami masukan, saran, dan pertanyaan dengan
              menghubungi WhatsApp kami di +62 823-8641-6545. Feedback dari
              kalian membantu kami untuk memahami kebutuhan dan harapan yang
              kalian butuhkan, sehingga kami dapat memberikan pelayanan yang
              lebih baik lagi. <i>"Hormat kami SNEAKER."</i>
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col bg-[#f9fafb] p-5 md:p-10 w-full">
            <h1 className="text-xl md:text-2xl py-6 font-bold mb-3 text-center">
              Pertanyaan yang sering diajukan
            </h1>
            <div className="my-5 border-b-2 border-gray-300 w-full" />

            {/* FAQ Items */}
            {[
              {
                question: "Seperti apa SNEAKER?",
                answer:
                  "SNEAKER adalah sebuah toko sepatu yang menjual sepatu premium dari brand terkenal seperti Adidas, Nike, Converse, Vans, dan masih banyak lagi.",
              },
              {
                question: "Bagaimana cara membeli di SNEAKER?",
                answer:
                  "Ada dua cara dalam memesan di store kami. Pertama, kamu bisa memesan menggunakan aplikasi, di mana kami menggunakan Cash on Delivery sebagai media pembayaran. Kedua, kamu bisa mengunjungi toko kami langsung, dan membayar secara tunai, OVO, QRIS, atau debit.",
              },
              {
                question:
                  "Dimana saya bisa mengunjungi SNEAKER secara langsung?",
                answer:
                  "SNEAKER berlokasi di Jl. Raya Bogor No.KM.24 No.40, RT.6/RW.1, Susukan, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770.",
              },
            ].map((item, index) => (
              <div
                className="flex justify-between items-start mb-6"
                key={index}
              >
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {item.question}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
                <span className="ml-4 text-xl font-bold">^</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
