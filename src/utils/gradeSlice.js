import { createSlice } from "@reduxjs/toolkit";

const gradeSlice = createSlice({
    name: "grade",
    initialState: null,
    reducers: {
        addGrade: (state, action) => {
            return action.payload;
        }
    }
});

export const {addGrade} = gradeSlice.actions;
export default gradeSlice.reducer;