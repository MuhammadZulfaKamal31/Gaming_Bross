import React from 'react'
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
    const scrollLeft = () => {
        document.getElementById("card-content").scrollLeft -= 600;
      };
    
      const scrollRight = () => {
        document.getElementById("card-content").scrollLeft += 600;
      };
    
      return (
        <div className="px-36 py-10">
            <div className="w-full h-[340px] bg-[#ffa500] px-24 py-20 rounded-xl">
              <div className="w-full">
                <h1 className="text-white font-extrabold text-[45px] leading-10 mb-2">
                  KEJAR DISKON SPESIAL
                </h1>
                <h1 className="text-white font-normal text-[19px] mb-4">
                  Dont Forget Left Behind
                </h1>
                <button className="bg-[#00a3ff] py-2 px-2 w-1/2 text-white font-semibold hover:bg-[#0077ff] rounded-lg">
                  Belanja Sekarang
                </button>
              </div>
            </div>
          <div className="relative -mt-28">
            <div className="">
              <div
                id="card-content"
                className="Carousel p-4 flex items-center justify-center overflow-x-auto scroll-smooth scrollbar-hide"
              >
                <div className="w-1/2 lg:w-[1111px] absolute top-35 bottom-35 flex justify-between">
                  <button
                    onClick={scrollLeft}
                    className="text-[40px] p-2 m-2 rounded-full"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="text-[40px] p-2 m-2 rounded-full"
                  >
                    <FiChevronRight />
                  </button>
                </div>  
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      )
}

export default Carousel