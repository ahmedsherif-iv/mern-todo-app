import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar";
import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";

const ResetPasswordPage = ({ history, location }) => {
    return (
        <>
            <Navbar />
            <ResetPasswordForm history={history} location={location} />
            <Footer />
        </>
    );
}

export default ResetPasswordPage;