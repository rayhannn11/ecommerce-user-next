import React from "react";

const ReviewProduct = ({ reviews }) => {
  return (
    <div className="flex flex-col gap-5 w-full max-w-6xl mx-auto my-8 px-4 md:py-20 md:px-0">
      <h1 className="text-2xl md:text-3xl font-bold text-start">
        Review Product
      </h1>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            className="flex flex-col bg-[#F3F5F7] w-full p-8"
            key={review._id}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                className="h-[50px] w-[50px] rounded-full"
                src={review.avatar || "/images/noavatar.jpg"}
                alt="avatar"
              />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{review.name}</span>
                <span className="font-bold">{review.email}</span>
              </div>
            </div>
            <div className="flex gap-[5px] mb-6 items-center">
              {Array(review.star)
                .fill()
                .map((item, i) => (
                  <img
                    className="h-4 w-4"
                    src="/images/star.png"
                    alt=""
                    key={i}
                  />
                ))}
              <span>({review.star})</span>
            </div>
            <p className="text-lg md:text-xl">{review.desc}</p>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center mt-10">
          <h3 className="text-2xl md:text-3xl text-center">
            Belum Ada Review Product
          </h3>
        </div>
      )}
    </div>
  );
};

export default ReviewProduct;
