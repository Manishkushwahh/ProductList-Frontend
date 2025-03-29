import { createSlice } from "@reduxjs/toolkit";

const materialSlice = createSlice({
    name: "material",
    initialState: null,
    reducers: {
        addMaterial: (state, action) => {
            return action.payload;
        },
        removeMaterial: (state, action) => {
            const newMaterial = state.filter((material) => material._id !== action.payload);
            return newMaterial;
        }
    }
});

export const {addMaterial, removeMaterial} = materialSlice.actions;
export default materialSlice.reducer;