import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";

const HomePage = () => {
    return (
        <>
            <Navbar toggleColor={true} />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default HomePage;