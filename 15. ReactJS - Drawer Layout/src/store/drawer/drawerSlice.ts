//REDUX-TOOLKIT
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface DrawerSliceState {
    bgColor: string,
    textColor: string,
    selectedBgColor: string,
    selectedTextColor: string,
    headerEnable: boolean,
    sidebarSmall: boolean,
    sidebarBig: boolean,
    lineOnSelect: boolean,
    typeShow: boolean,
    bgOnSelect: boolean,
    drawer: {
        open: boolean;
        expendMenu: boolean;
        activeMenu: string;
        expendKey: string;
    }
}

const initialState: DrawerSliceState = {
    bgColor: "#2B5F9B",
    textColor: "#FFFFFF",
    selectedBgColor: "#000000",
    selectedTextColor: "#F79A20",
    headerEnable: true,
    sidebarSmall: false,
    sidebarBig: false,
    lineOnSelect: true,
    typeShow: false,
    bgOnSelect: false,
    drawer: {
        open: false,
        expendMenu: false,
        activeMenu: "/",
        expendKey: "dashboard"
    }
}

const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        setDrawer: (state, action: PayloadAction<DrawerSliceState>) => ({
            ...state,
            bgColor: action.payload.bgColor,
            textColor: action.payload.textColor,
            selectedBgColor: action.payload.selectedBgColor,
            selectedTextColor: action.payload.selectedTextColor,
            headerEnable: action.payload.headerEnable,
            sidebarSmall: action.payload.sidebarSmall,
            sidebarBig: action.payload.sidebarBig,
            lineOnSelect: action.payload.lineOnSelect,
            typeShow: action.payload.typeShow,
            bgOnSelect: action.payload.bgOnSelect,
            drawer: action.payload.drawer
        })
    }
});


export const { setDrawer } = drawerSlice.actions;
export const selectDrawer = (state: RootState) => state.drawer;
export default drawerSlice.reducer;