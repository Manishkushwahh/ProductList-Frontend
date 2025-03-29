import { createSlice } from "@reduxjs/toolkit";

const finalSlice = createSlice({
    name: "final",
    initialState: null,
    reducers: {
        addFinal: (state, action) => {
            return action.payload;
        }
    }
});

export const {addFinal} = finalSlice.actions;
export default finalSlice.reducer;