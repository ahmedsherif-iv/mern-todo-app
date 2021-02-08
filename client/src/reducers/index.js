import { combineReducers } from '@reduxjs/toolkit';
import {
    userDetailsReducer,
    userForgotPasswordReducer,
    userLoginReducer, userRegisterReducer,
    userResetPasswordReducer,
    userUpdateProfileReducer
} from '../reducers/userReducer';
import {
    todoListCreateReducer,
    todoListDeleteReducer,
    todoListReducer,
    todoListUpdateReducer
} from './todoListReducer';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,

    todoListCreate: todoListCreateReducer,
    todoList: todoListReducer,
    todoListUpdate: todoListUpdateReducer,
    todoListDelete: todoListDeleteReducer,
});

export default rootReducer;