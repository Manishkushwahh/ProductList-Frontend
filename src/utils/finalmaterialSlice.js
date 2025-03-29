import { createSlice } from "@reduxjs/toolkit";

const finalmaterialSlice = createSlice({
    name: "finalmaterial",
    initialState: null,
    reducers: {
        addFinalMaterial: (state, action) => {
            return action.payload;
        },
        removeFinalMaterial: () => {
            return null;
        }
    }
});

export const {addFinalMaterial, removeFinalMaterial} = finalmaterialSlice.actions;
export default finalmaterialSlice.reducer;