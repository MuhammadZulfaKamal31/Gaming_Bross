const Carousel = () => {
    return (
        <>
            <div className="carousel w-full h-[786px] border-2 border-red-600">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
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
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
