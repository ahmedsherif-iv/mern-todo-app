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
    TODO_LIST_UPDATE_RESET,
    TODO_LIST_UPDATE_SUCCESS
} from '../constants/todoListConstants';

export const todoListCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TODO_LIST_CREATE_REQUEST:
            return { ...state, isLoading: true };
        case TODO_LIST_CREATE_SUCCESS:
            return { ...state, isLoading: false, success: true };
        case TODO_LIST_CREATE_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const todoListsReducer = (state = { todoLists: [] }, action) => {
    switch (action.type) {
        case TODO_LISTS_GET_REQUEST:
            return { ...state, isLoading: true };
        case TODO_LISTS_GET_SUCCESS:
            return { ...state, isLoading: false, todoLists: action.payload };
        case TODO_LISTS_GET_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const todoListReducer = (state = { todoLists: [] }, action) => {
    switch (action.type) {
        case TODO_LIST_GET_REQUEST:
            return { ...state, isLoading: true };
        case TODO_LIST_GET_SUCCESS:
            return { ...state, isLoading: false, todoList: action.payload };
        case TODO_LIST_GET_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const todoListUpdateReducer = (state = { todoList: {} }, action) => {
    switch (action.type) {
        case TODO_LIST_UPDATE_REQUEST:
            return { ...state, isLoading: true };
        case TODO_LIST_UPDATE_SUCCESS:
            return { ...state, isLoading: false, success: true, product: action.payload };
        case TODO_LIST_UPDATE_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case TODO_LIST_UPDATE_RESET:
            return { product: {} };
        default:
            return state;
    }
};


export const todoListDeleteReducer = (state = { todoLists: [] }, action) => {
    switch (action.type) {
        case TODO_LIST_DELETE_REQUEST:
            return { ...state, isLoading: true };
        case TODO_LIST_DELETE_SUCCESS:
            return { ...state, isLoading: false, success: true };
        case TODO_LIST_DELETE_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};