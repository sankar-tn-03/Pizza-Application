import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "../function/CustomerReducer";


const store = configureStore({
   reducer: CustomerReducer,

 });

 export default store;