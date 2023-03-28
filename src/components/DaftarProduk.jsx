import Data from "./../Data.json"
import { Link } from "react-router-dom"

const DaftarProduct = () => {

    return (
        <>
            <section class="flex px-32 pb-10 dark:bg-gray-800">
                {Data.map(({ title, image, dissc, price }, i) => (
                    <Link to="">
                        <div className="bg-white w-[280px] py-3 px-4 m-4 rounded-lg" key={i}>
                            <div className="top">
                                <img className="w-[235px] object-cover mx-auto" src={image} alt="" />
                            </div>
                            <div className="button mt-2">
                                <div className="tittle text-[14px] font-bold text-[#00a3ff]">Games</div>
                                <div className="leading-4 mb-2 text-16px">
                                    <div className="judul">{title}</div>
                                    <div className="categories">R3/English</div>
                                </div>
                                <div className="leading-5 font-bold text-[14px]">
                                    <div className="dissc"><del>Rp{dissc}</del></div>
                                    <div className="price2">Rp{price}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default DaftarProduct;