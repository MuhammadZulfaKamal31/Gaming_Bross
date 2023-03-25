import image1 from "../assets/images/hogwarts.webp";
import image2 from "../assets/images/hor.webp";
import image3 from "../assets/images/gow2.webp";

const Carousel = () => {
  return (
    <>
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[460px]">
          <img
            src={image1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[460px]">
          <img
            src={image2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[460px]">
          <img
            src={image3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    </div>
      {/* <div className="carousel w-full h-[460px]">
                <div className="carousel-item relative w-full">
                    <img src={image1} className="w-full bg-cover bg-center" />
                </div>
            </div> */}
    </>
  );
};

export default Carousel;
