import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utilil/userSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer
    }
})

export default appStore;