import {Job} from "../../interface/"

const initialJob: Job[] =[
    {
        id: 1,
        name: "hoc redux",
        status: false,
    },
    {
        id: 2,
        name: "hoc redux",
        status: false,
    },
    {
        id: 3,
        name: "hoc redux",
        status: false,
    },

]

const jobReducer = (state=initialJob, action:any)=>{
    switch(action.type){
        case "ADD":
            return [...state];
        case "DELETE":
            return [...state];
        case "UPDATE":
            return [...state];
        default:
            return state;
    }
}
export default jobReducer;