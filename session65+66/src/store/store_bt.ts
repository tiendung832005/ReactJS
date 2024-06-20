import { createStore, combineReducers } from 'redux';

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

const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer);
export default store;
