import { createSlice } from "@reduxjs/toolkit";

const finalgradeSlice = createSlice({
    name: "finalgrade",
    initialState: null,
    reducers: {
        addFinalGrade: (state, action) => {
            return action.payload;
        },
        removeFinalGrade: () => {
            return null;
        }
    }
});

export const {addFinalGrade, removeFinalGrade} = finalgradeSlice.actions;
export default finalgradeSlice.reducer;