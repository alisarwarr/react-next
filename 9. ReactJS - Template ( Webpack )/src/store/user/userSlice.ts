//REDUX-TOOLKIT
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface State {
    userData: any;
    listData: any;
}

const initialState: State = {
    userData: null,
    listData: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<State>) => {
            return { ...state, userData: action.payload }
        },
        setList: (state, action: PayloadAction<State>) => {
            return { ...state, listData: action.payload }
        },
    },
});


export const { setUser, setList } = userSlice.actions;
export const selectUserData = (state: { user: State }) => state.user.userData;
export const selectUserList = (state: { user: State }) => state.user.listData;
export default userSlice.reducer;