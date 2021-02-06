import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const HomePage = ({ history, location }) => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/lists';

    useEffect(() => {
        if (userInfo) {
            history.replace(redirect);
        }
    }, [userInfo, history, redirect]);

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