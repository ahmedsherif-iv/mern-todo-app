import { combineReducers } from '@reduxjs/toolkit';
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_RESET,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAIL,
    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAIL,
} from '../constants/userConstants';

// const userInfo = {};

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, isLoading: false, userInfo: action.payload, isAuthenticated: true };
        case USER_LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { isLoading: true };
        case USER_REGISTER_SUCCESS:
            return { isLoading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { isLoading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, isLoading: true };
        case USER_DETAILS_SUCCESS:
            return { isLoading: false, user: action.payload };
        case USER_DETAILS_FAIL:
            return { isLoading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { isLoading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return { isLoading: false, success: true, userInfo: action.payload };
        case USER_UPDATE_PROFILE_FAIL:
            return { isLoading: false, error: action.payload };
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
};

export const userForgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FORGOT_PASSWORD_REQUEST:
            return { isLoading: true };
        case USER_FORGOT_PASSWORD_SUCCESS:
            return { isLoading: false, success: true };
        case USER_FORGOT_PASSWORD_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const userResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_RESET_PASSWORD_REQUEST:
            return { isLoading: true };
        case USER_RESET_PASSWORD_SUCCESS:
            return { isLoading: false, success: true, userInfo: action.payload };
        case USER_RESET_PASSWORD_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
});