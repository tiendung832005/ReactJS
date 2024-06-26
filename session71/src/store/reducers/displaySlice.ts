import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'display',
  initialState: { isGridView: true },
  reducers: {
    toggleView: (state) => {
      state.isGridView = !state.isGridView;
    },
  },
});
export const { toggleView } = displaySlice.actions;
export default displaySlice.reducer;
