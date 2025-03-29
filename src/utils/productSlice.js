import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: null,
    reducers: {
        addProduct: (state, action) => {
            return action.payload;
        },
        removeProduct: (state, action) => {
            const newProduct = state.filter((product) => product._id !== action.payload);
            return newProduct;
        }
    }
});

export const {addProduct, removeProduct} = productSlice.actions;
export default productSlice.reducer;