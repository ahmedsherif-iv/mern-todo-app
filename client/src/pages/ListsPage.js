import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar"

const ListsPage = ({ history, location }) => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (!userInfo) {
            history.replace(redirect);
        }
    }, [userInfo, history, redirect]);

    return (
        <>
            <Navbar />
        </>
    );
}

export default ListsPage;