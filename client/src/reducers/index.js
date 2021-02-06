import { combineReducers } from '@reduxjs/toolkit';
import {
    userDetailsReducer,
    userForgotPasswordReducer,
    userLoginReducer, userRegisterReducer,
    userResetPasswordReducer,
    userUpdateProfileReducer
} from '../reducers/userReducer';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
});

export default rootReducer;