import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar";
import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordPage = ({ history, location }) => {
    return (
        <>
            <Navbar />
            <ForgotPasswordForm history={history} location={location} />
            <Footer />
        </>
    );
}

export default ForgotPasswordPage;