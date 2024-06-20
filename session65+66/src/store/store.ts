import {combineReducers, createStore} from "redux";
import countReducer from "./reducers/countReducer.ts";
import App from "../App.tsx"
import jobReducer from "./reducers/todoListReducer.ts";



const initialUserState = {
    id: '',
    userName: '',
    gender: '',
    dateBirth: '',
    address: ''
};

const SET_USER = 'SET_USER';

export const setUser = (user:any) => ({
    type: SET_USER,
    payload: user
});

const userReducer = (state = initialUserState, action:any) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
// bài 2:
const initialUsersState = [
    { id: '1', userName: 'JohnDoe', gender: 'Male', dateBirth: '1990-01-01', address: '123 Main St' },
    { id: '2', userName: 'JaneDoe', gender: 'Female', dateBirth: '1992-02-02', address: '456 Elm St' }
];

const SET_USERS = 'SET_USERS';

export const setUsers = (users:any) => ({
    type: SET_USERS,
    payload: users
});

const usersReducer = (state = initialUsersState, action:any) => {
    switch (action.type) {
        case SET_USERS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    countReducer,
    jobReducer,
    user: userReducer
})

const store = createStore(rootReducer);

export default store;
