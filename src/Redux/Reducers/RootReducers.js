import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import LoginReducer from "./LoginReducer";
import UsersReducer from "./UsersReducer";
export default combineReducers({
    login:LoginReducer,
    users:UsersReducer,
    form: formReducer
});