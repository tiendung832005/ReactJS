import {combineReducers, createStore} from "redux";
import countReducer from "./reducers/countReducer.ts";
import App from "../App.tsx"
import jobReducer from "./reducers/todoListReducer.ts";

const rootReducer = combineReducers({
    countReducer,
    jobReducer
})
const store = createStore(rootReducer);
export default store;