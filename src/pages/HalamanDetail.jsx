
import DaftarProduct from "../component/DaftarProduk";
import Description from "../component/Description";
import Detail from "../component/Detail";
import Footer from "../component/Footer";
import Review from "../component/Review";

const HalamanDetail = () => {
    return (
        <>
            <Detail />
            <Description />
            <Review />
            <DaftarProduct />
        </>
    )
}

export default HalamanDetail;