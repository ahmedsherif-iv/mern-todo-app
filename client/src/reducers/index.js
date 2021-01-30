import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;