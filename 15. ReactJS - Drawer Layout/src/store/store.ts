//REDUX-TOOLKIT
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//SLICES
import drawerSlice from "./drawer/drawerSlice";


const rootReducer = combineReducers({
    drawer: drawerSlice
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false
        })
    )
});


export type RootState = ReturnType<typeof store.getState>;