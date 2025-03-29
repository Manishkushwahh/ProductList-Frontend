import { createSlice } from "@reduxjs/toolkit";

const finalproductSlice = createSlice({
    name:"finalproduct",
    initialState: null,
    reducers: {
        addFinalProduct: (state, action) => {
            return action.payload;
        },
        removeFinalProduct: () => {
            return null;
        }
    }
});

export const {addFinalProduct, removeFinalProduct} = finalproductSlice.actions;
export default finalproductSlice.reducer;