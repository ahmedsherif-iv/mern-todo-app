import axios from 'axios';
import {
    TODO_LIST_CREATE_FAIL,
    TODO_LIST_CREATE_REQUEST,
    TODO_LIST_CREATE_SUCCESS,
    TODO_LIST_DELETE_FAIL,
    TODO_LIST_DELETE_REQUEST,
    TODO_LIST_DELETE_SUCCESS,
    TODO_LISTS_GET_FAIL,
    TODO_LISTS_GET_REQUEST,
    TODO_LISTS_GET_SUCCESS,
    TODO_LIST_GET_FAIL,
    TODO_LIST_GET_REQUEST,
    TODO_LIST_GET_SUCCESS,
    TODO_LIST_UPDATE_FAIL,
    TODO_LIST_UPDATE_REQUEST,
    TODO_LIST_UPDATE_SUCCESS
} from '../constants/todoListConstants';

export const createTodoList = (name, color = '#0000') => async (dispatch, getState) => {
    try {
        dispatch({ type: TODO_LIST_CREATE_REQUEST });

        const { userLogin } = getState();
        const { userInfo } = userLogin;

        const config = {
            headers: {
                Authorization: userInfo.token,
            },
        };

        console.log(name, color);

        const { data } = await axios.post('/api/todo-lists', { name, color }, config);

        dispatch({
            type: TODO_LIST_CREATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: TODO_LIST_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const getTodoLists = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TODO_LISTS_GET_REQUEST });

        const { userLogin } = getState();
        const { userInfo } = userLogin;

        const config = {
            headers: {
                Authorization: userInfo.token,
            },
        };

        const { data } = await axios.get('/api/todo-lists', config);

        dispatch({
            type: TODO_LISTS_GET_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: TODO_LISTS_GET_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const getTodoList = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: TODO_LIST_GET_REQUEST });

        const { userLogin } = getState();
        const { userInfo } = userLogin;

        const config = {
            headers: {
                Authorization: userInfo.token,
            },
        };

        const { data } = await axios.get(`/api/todo-lists/${id}`, config);

        dispatch({
            type: TODO_LIST_GET_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: TODO_LIST_GET_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const updateTodoList = (id, todoList) => async (dispatch, getState) => {
    try {
        dispatch({ type: TODO_LIST_UPDATE_REQUEST });

        const { userLogin } = getState();
        const { userInfo } = userLogin;

        const config = {
            headers: {
                Authorization: userInfo.token,
            },
        };

        const { data } = await axios.put(`/api/todo-lists/${id}`, todoList, config);

        dispatch({
            type: TODO_LIST_UPDATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: TODO_LIST_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteTodoList = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: TODO_LIST_DELETE_REQUEST });

        const { userLogin } = getState();
        const { userInfo } = userLogin;

        const config = {
            headers: {
                Authorization: userInfo.token,
            },
        };

        const { data } = await axios.delete(`/api/todo-lists/${id}`, config);

        dispatch({
            type: TODO_LIST_DELETE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: TODO_LIST_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}