
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Detail from "../components/Detail";
import Review from "../components/Review";
import DaftarProduct from "../components/DaftarProduk";

const HalamanDetail = () => {
    return (
        <>
            <Navbar/>
            <Detail />
            <Description />
            <Review />
            <DaftarProduct />
        </>
    )
}

export default HalamanDetail;