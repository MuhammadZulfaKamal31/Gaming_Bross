
const Detail = () => {
    return (
        <>
            <div className="px-32">
                <div className="flex gap-5">
                    <div className=" border border-black mt-10">
                        <img src=" https://www.psegameshop.com/wp-content/uploads/2021/10/PS4-The-Witcher-3-Wild-Hunt-GOTY.png"
                            alt="" style={{ height: '500px', width: '2000px' }}></img>
                    </div>
                    <div className="mt-10 flex flex-col justify-between">
                        <div className="text-black">
                            <h1 className="text-black text-[35px] font-bold mb-5">PS4 The
                                Witcher 3: Wild Hunt
                                [GOTY]
                                (R3/English) PO 28.02.23
                            </h1>
                            <p className="text-black text-base font-semibold leading-5 mb-5">Play the most
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
                            <p style={{ color: 'rgb(9, 9, 84)', fontWeight: '500' }}><span
                                style={{ fontSize: '19px', color: 'black', fontWeight: '700' }}>Categories:</span> Games,
                                Playstation
                                4.
                            </p>
                            <p style={{ color: "rgb(9, 9, 84)", fontWeight: "500" }}><span
                                style={{ fontSize: '19px', color: 'black', fontWeight: '700' }}>Tags :</span> Action,
                                Adventure, Sony</p>
                        </div>
                        <div>
                            <p className="mb-3" style={{ color: 'rgb(9, 9, 84)', fontWeight: '500' }}><span
                                style={{ fontSize: '19px', color: 'black', fontWeight: 700 }}>Harga:</span> Rp.399.000,-</p>
                            <button
                                className="py-3 rounded-full font-semibold bg-primary focus:outline-none text-white w-1/2">Tambahkan
                                ke
                                keranjang</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;