import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import materialReducer from "./materialSlice";
import gradeReducer from "./gradeSlice";
import finalproductReducer from "./finalproductSlice";
import finalmaterialReducer from "./finalmaterialSlice";
import finalgradeReducer from "./finalgradeSlice";
import finalReducer from "./finalSlice";

const appStore = configureStore({
    reducer: {
        product: productReducer,
        material: materialReducer,
        grade: gradeReducer,
        finalproduct: finalproductReducer,
        finalmaterial: finalmaterialReducer,
        finalgrade: finalgradeReducer,
        final: finalReducer,
    }
});

export default appStore;