import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListCard from "../components/ListCard/ListCard";
import ListsContainer from "../components/ListsContainer/ListsContainer";
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
            <ListsContainer >
                <ListCard>item 1</ListCard>
                <ListCard>item 2</ListCard>
                <ListCard>item 3</ListCard>
                <ListCard>item 2</ListCard>
                <ListCard>item 3</ListCard>

            </ListsContainer>
        </>
    );
}

export default ListsPage;