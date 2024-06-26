import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
    name: "todoListReducer",
    initialState:{
        jobs:[
            {
                id: 1,
                name: "hoc redux",
                
            },
            {
                id: 2,
                name: "hoc lập trình",
                
            },
            {
                id: 3,
                name: "hoc code",
                
            },
        ]
    },
    reducers:{
        addTodo:(state:any, action: any)=>{
            state.jobs.push(action.payload)
        },
        deleteJob:(state, action)=>{
            state.jobs = state.jobs.filter((job:any)=>{
                return job.id!== action.payload
            })
        }
    }
})
const { addTodo } = todoListReducer.actions;

export default todoListReducer.reducer;