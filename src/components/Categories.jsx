import React from "react";

const Categories = () => {
  return (
    <>
      <div className="px-36 py-16">
        <h1 className="font-bold text-[30px] text-black">
          Browse By Categories
        </h1>
        <div className="grid grid-flow-col grid-cols-6 gap-10 mt-6">
          <div className="">
            <img
              src="https://www.psegameshop.com/wp-content/uploads/2021/04/ns-psconsole.jpg"
              alt="Playstation"
              className="rounded-xl"
            />
            <p className="text-black font-bold text-center mt-2">Playstation</p>
          </div>
          <div className="">
            <img
              src="https://www.psegameshop.com/wp-content/uploads/2021/04/ns-xboxconsole.jpg"
              alt="Xbox"
              className="rounded-xl"
            />
            <p className="text-black font-bold text-center mt-2">Xbox One Console</p>
          </div>
          <div className="">
            <img
              src="https://www.psegameshop.com/wp-content/uploads/2021/04/ns-switchaccessories.jpg"
              alt="Playstation"
              className="rounded-xl"
            />
            <p className="text-black font-bold text-center mt-2">Nintendo Switch Console</p>
          </div>
          <div className="">
            <img
              src="https://www.psegameshop.com/wp-content/uploads/2021/04/ns-psaccessories.jpg"
              alt="Playstation"
              className="rounded-xl"
            />
            <p className="text-black font-bold text-center mt-2">Playstation Accessories</p>
          </div>
          <div className="">
            <img
              src="https://www.psegameshop.com/wp-content/uploads/2021/04/ns-nintendogame.jpg"
              className="rounded-xl"
            />
            <p className="text-black font-bold text-center mt-2">Nitendo Switch Games</p>
          </div>
          <div className="">
            <img
              src="https://www.psegameshop.com/wp-content/uploads/2021/04/ns-xbox-games.jpg"
              alt="Playstation"
              className="rounded-xl"
            />
            <p className="text-black font-bold text-center mt-2">Xbox One Game</p>
          </div>
        </div>
        <div className="mt-10 py-10 px-5">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-14 rounded-2xl text-white">
            <div className="flex items-center justify-center gap-16">
            <h1 className="font-bold text-[25px]">Jangan Lupa Mengirimkan Konfirmasi Pembayaran Kepada Kami</h1>
            <button className="btn text-base">Send Payment Confirmation<span className="m-2"> ❯</span></button>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
