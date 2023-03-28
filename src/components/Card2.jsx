import React from "react";
const image = "https://m.media-amazon.com/images/I/81wSlwccDDL._AC_SX679_.jpg";

const Card2 = () => {
  return (
    <>
      <div className="bg-white w-[180px] py-3 px-2 m-4 rounded-lg">
        <div className="top">
          <img className="w-[135px] object-cover mx-auto" src={image} alt="" />
        </div>
        <div className="button mt-2">
          <div className="tittle text-[14px] font-bold text-[#00a3ff]">Games</div>
          <div className="leading-4 mb-2 text-16px">
          <div className="judul">Atomic Heart PS5</div>
          <div className="categories">(R3/English)</div>
          </div>
          <div className="leading-5 font-bold text-[14px]">
          <div className="dissc"><del>Rp329,000</del></div>
          <div className="price2">Rp329,000</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
