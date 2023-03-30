// import image1 from "../assets/images/hogwarts.webp";
import bgVideo from "../assets/images/hogwarts.mp4"


const FirstHome = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[460px]">
          <video src={bgVideo} autoPlay loop muted className="w-[100%] object-cover" />
          <div className="gradient-overlay"></div>
          
        </div>
      </div>
    </>
  );
};

export default FirstHome;
