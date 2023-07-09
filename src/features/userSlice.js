import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = null;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: () => initialState,
        
    },   
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, { payload }) => payload);
    },
});
export const { logout} = userSlice.actions;
export default userSlice.reducer;