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
    todoListsReducer,
    todoListReducer,
    todoListUpdateReducer
} from './todoListReducer';
import {
    todoListItemCreateReducer,
    todoListItemDeleteReducer,
    todoListItemUpdateReducer,
    todoListItemsReducer,
} from './todoListItemsReducer';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,

    todoListCreate: todoListCreateReducer,
    todoLists: todoListsReducer,
    todoList: todoListReducer,
    todoListUpdate: todoListUpdateReducer,
    todoListDelete: todoListDeleteReducer,

    todoListItemCreate: todoListItemCreateReducer,
    todoListItemDelete: todoListItemDeleteReducer,
    todoListItemUpdate: todoListItemUpdateReducer,
    todoListItems: todoListItemsReducer,
});

export default rootReducer;