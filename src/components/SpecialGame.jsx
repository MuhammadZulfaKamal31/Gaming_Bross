import React from "react";

const image1 = "https://www.psegameshop.com/wp-content/uploads/2021/04/ns-xbox.jpg"
const image2 = "https://www.psegameshop.com/wp-content/uploads/2021/04/ns-playstation.jpg"
const image3 = "https://www.psegameshop.com/wp-content/uploads/2021/04/ns-nintendo.jpg"


const SpecialGame = () => {
  return (
    <>
      <div className="px-36 py-14 bg-black">
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold text-white">SPECIAL GAMINGBROS</h1>
        </div>
          <div className="flex gap-10 items-center justify-center my-10">
              <img src={image1} alt="" className="w-[320px]" />
              <img src={image2} alt="" className="w-[320px]" />
              <img src={image3} alt="" className="w-[320px]" />
          </div>
        </div>
    </>
  );
};

export default SpecialGame;
