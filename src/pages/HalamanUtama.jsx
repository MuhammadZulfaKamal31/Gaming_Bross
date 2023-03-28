import Navbar from "../components/Navbar";
import SpecialGame from "../components/SpecialGame";
import Carousel2 from "../components/Carousel2";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import FirstHome from "../components/FirstHome";
import Carousel from "../components/Carousel";


const HalamanUtama = () => {
    return (
        <>
            <Navbar />
            <FirstHome/>
            <SpecialGame/>
            <Carousel/>
            <Carousel2/>
            <Categories/>
            <Footer/>
        </>
    );
};
export default HalamanUtama;

