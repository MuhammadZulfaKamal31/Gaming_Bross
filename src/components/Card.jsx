import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="slick-arrow slick-prev"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="black"
      d="M332.436 46.279c-8.15-8.15-21.358-8.15-29.508 0L128.27 230.563c-8.15 8.15-8.15 21.358 0 29.508l174.658 174.659c8.15 8.15 21.358 8.15 29.508 0 8.149-8.15 8.149-21.358 0-29.508L187.977 256l144.459-144.46c8.149-8.15 8.149-21.358 0-29.508z"
    />
  </svg>
);

const CustomNextArrow = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="slick-arrow slick-next"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="black"
      d="M179.564 46.279c8.15-8.15 21.358-8.15 29.508 0L383.73 230.563c8.15 8.15 8.15 21.358 0 29.508L209.072 434.73c-8.15 8.15-21.358 8.15-29.508 0-8.149-8.15-8.149-21.358 0-29.508L324.963 256l-144.399-144.46c-8.149-8.15-8.149-21.358 0-29.508z"
    />
  </svg>
);

const Card = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-10 my-10 w-[80%] m-0 mt-5">
        <Slider {...settings}>
          {Data.map(({ title, image, dissc, price }, i) => (
            <Link to="">
              <div className="card border border-gray-400 w-[170px] h-[340px] py-3 px-4 rounded-lg">
                <div className="card-top">
                  <img className="object-cover mx-auto" src={image} alt="" />
                </div>
                <div className="card-bottom">
                  <div className="tittle text-[14px] font-bold text-[#00a3ff]">
                    Games
                  </div>
                  <div className="flex flex-col justify-between h-32">
              <div className="leading-4 text-16px">
                <div className="judul">{title}</div>
                <div className="categories">R3/English</div>
              </div>
              <div className="font-bold text-[14px]">
                <div className="dissc">
                  <del>Rp{dissc}</del>
                </div>
                <div className="price2">Rp{price}</div>
              </div>
            </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Card;
