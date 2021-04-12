import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoList, getTodoLists, updateTodoList } from "../actions/todoListActions";
import ListCard from "../components/ListCard/ListCard";
import ListsContainer from "../components/ListsContainer/ListsContainer";
import Navbar from "../components/Navbar/Navbar"

const ListsPage = ({ history, location }) => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const lists = useSelector(state => state.todoLists);
    const { todoLists, isLoading, error } = lists;

    const todoListDelete = useSelector(state => state.todoListDelete);
    const {
        isLoading: isLoadingDelete,
        success: successDelete,
        error: errorDelete,
    } = todoListDelete;

    const todoListCreate = useSelector(state => state.todoListCreate);
    const {
        isLoading: isLoadingCreate,
        success: successCreate,
        error: errorCreate,
    } = todoListCreate;

    const todoListUpdate = useSelector(state => state.todoListUpdate);
    const {
        isLoading: isLoadingUpdate,
        success: successUpdate,
        error: errorUpdate,
    } = todoListUpdate;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const handleDelete = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteTodoList(id));
        }
    }

    const handleUpdate = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(updateTodoList(id));
        }
    }

    useEffect(() => {
        if (!userInfo) {
            history.replace(redirect);
        }
        else {
            dispatch(getTodoLists());
        }
    }, [userInfo, history, redirect, dispatch, successDelete, successCreate, successUpdate]);

    return (
        <>
            <Navbar />
            <ListsContainer>
                {isLoading && (<h1>loading..</h1>)}
                {todoLists && (todoLists.map(list => (
                    <ListCard
                        handleDelete={handleDelete} handleUpdate={handleUpdate}
                        key={list._id} todoList={list}
                    />
                )))}
            </ListsContainer>
            {/* <Modal showModal={showUpdateModal} setShowModal={setShowUpdateModal}>
                <TodoListForm />
            </Modal> */}
        </>
    );
}

export default ListsPage;