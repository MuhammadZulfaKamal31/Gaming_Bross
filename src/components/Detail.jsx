
const Detail = () => {
    return (
        <>
            <div className="px-32 dark:bg-gray-800 dark:text-slate-50">
                <div className="flex gap-5">
                    <div className=" border border-black mt-10">
                        <img src=" https://www.psegameshop.com/wp-content/uploads/2021/10/PS4-The-Witcher-3-Wild-Hunt-GOTY.png"
                            alt="" style={{ height: '500px', width: '2000px' }}></img>
                    </div>
                    <div className="mt-10 flex flex-col justify-between">
                        <div className="text-black dark:text-white">
                            <h1 className="text-black dark:text-white text-[35px] font-bold mb-5">PS4 The
                                Witcher 3: Wild Hunt
                                [GOTY]
                                (R3/English) PO 28.02.23
                            </h1>
                            <p className="text-black dark:text-white text-base font-semibold leading-5 mb-5">Play the most
                                polished and complete version of
                                the most
                                awarded game of 2015
                                The
                                Fuji 3: Wild Hunt. Now
                                available with all expansions and additional content
                                Built for endless adventure, the massive open world of the Witcher sets new standards in terms
                                of
                                size,
                                depth and complexity
                                The Witcher 3: Wild Hunt Game of the year edition brings together the base game and all the
                                additional
                                content released to date</p>
                            <div className="text-gray-900 dark:text-white font-medium">
                                <p className="mb-2">
                                    <span className="text-black font-bold text-lg dark:text-white">Categories:</span> Games, Playstation 4.
                                </p>
                                <p className="mb-2">
                                    <span className="text-black font-bold text-lg dark:text-white">Tags :</span> Action, Adventure, Sony
                                </p>
                            </div>
                            <div className="text-gray-900 font-medium dark:text-white">
                                <p className="mb-2">
                                    <span className="text-black font-bold text-lg dark:text-white">Harga:</span> Rp.399.000,-
                                </p>
                                <button className="py-3 rounded-full font-semibold bg-primary focus:outline-none text-white w-1/2 mt-10">
                                    Tambahkan ke keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;