import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers:{
        increase: (state, action) => {
            state.count+1;
        },
        decrease: (state, action) => {
            state.count-1;
        }
    }
})
//  đi xuất ra các action bằng cách dùng detructoring
export const [increase, decrease] = Object.values(countReducer.actions);
// xuất ra hàm reducer
export default countReducer.reducer;