import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoLists } from "../actions/todoListActions";
import ListCard from "../components/ListCard/ListCard";
import ListsContainer from "../components/ListsContainer/ListsContainer";
import Navbar from "../components/Navbar/Navbar"

const ListsPage = ({ history, location }) => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const todoList = useSelector(state => state.todoList);
    const { todoLists, isLoading, error } = todoList;

    const todoListDelete = useSelector(state => state.todoListDelete);
    const {
        isLoading: isLoadingDelete,
        success: successDelete,
        error: errorDelete,
    } = todoListDelete;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (!userInfo) {
            history.replace(redirect);
        }
        else {
            dispatch(getTodoLists());
        }
    }, [userInfo, history, redirect, dispatch]);

    return (
        <>
            <Navbar />
            <ListsContainer >
                {isLoading && (<h1>loading..</h1>)}
                {todoLists && (todoLists.map(list => (
                    <ListCard key={list._id} todoList={list} />
                ))
                )}

            </ListsContainer>
        </>
    );
}

export default ListsPage;