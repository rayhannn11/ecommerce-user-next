"use client";
import axios from "axios";
import clsx from "clsx";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Review = ({ params }) => {
  const [star, setStar] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();
  const router = useRouter();
  console.log(params.productId);

  const handleForm = async (e) => {
    e.preventDefault();
    if (star && desc) {
      try {
        setIsLoading(true);

        const data = {
          productId: params.productId,
          name: session?.data?.user?.name,
          email: session?.data?.user?.email,
          avatar: session?.data?.user?.image,
          star,
          desc,
        };

        const res = await axios.post("/api/review/add", data);

        if (res.status === 200) {
          toast.success("Review Added");
          router.push(`/products/id/${params.productId}`);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Harap Isi Data Pengiriman");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-2/4 mx-auto py-8 lg:pt-[6.5rem] h-full">
      <div className="bg-white px-4 py-8  sm:px-10">
        <form className="space-y-6" onSubmit={handleForm}>
          {/* Desc */}
          <div>
            <label
              htmlFor="desc"
              className="
        block 
        text-xl 
        font-medium 
        leading-6 
        text-gray-900
        mb-3
      "
            >
              Berikan Ulasan Anda
            </label>
            <textarea
              className="border border-gray-200 rounded-sm  w-full py-6 px-3 resize-none"
              placeholder="description"
              value={desc}
              onChange={(ev) => setDesc(ev.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-end">
            <label
              htmlFor="rating"
              className="
        block 
        text-xl 
        font-medium 
        leading-6 
        text-gray-900
        mb-3
      "
            >
              Berikan Rating Penilaian Anda
            </label>
            <select
              name="rating"
              id="rating"
              onClick={(e) => setStar(e.target.value)}
              className="py-[20px] px-[80px] border border-[#000] rounded-[6px] m-1 cursor-pointer  text-center "
            >
              <option value={1}>1⭐</option>
              <option value={2}>2⭐</option>
              <option value={3}>3⭐</option>
              <option value={4}>4⭐</option>
              <option value={5}>5⭐</option>
            </select>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="mt-4 p-3 w-full font-bold rounded-md text-white bg-[#111] active:bg-[#000] flex justify-center items-center gap-4"
            >
              {isLoading ? "Loading..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
