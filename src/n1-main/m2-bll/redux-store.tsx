import {combineReducers, createStore as createStore} from "redux";
import profileReduser from "./Redusers/profileReduser";
import authReducer from "./Redusers/authReducer";
import registrationReducer from "./Redusers/registrationReducer";

export type ActionTypes =
    ReturnType<typeof profileReduser>
    |ReturnType<typeof authReducer>
    |ReturnType<typeof registrationReducer>;

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>



let rootReducer = combineReducers({
    Profile: profileReduser,
    isAuth: authReducer,
    RegistrationData: registrationReducer,

})




let store = createStore(rootReducer);

export default store;

//@ts-ignore
window.store = store