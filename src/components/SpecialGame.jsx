import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecialGame = () => {
  const image1 = "https://www.psegameshop.com/wp-content/uploads/2021/04/ns-xbox.jpg"
  const image2 = "https://www.psegameshop.com/wp-content/uploads/2021/04/ns-playstation.jpg"
  const image3 = "https://www.psegameshop.com/wp-content/uploads/2021/04/ns-nintendo.jpg"
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <div className="px-10 lg:px-36 py-10 bg-black">
          <div className="flex items-center justify-center -mt-5 mb-10">
          <h1 className="text-[30px] font-normal text-white mx-auto font-titilium">Spesial GamingBrozz</h1>
          </div>
          <div className="w-full">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </Slider>
        </div>
      </div>
    </>
  );
};

export default SpecialGame;
