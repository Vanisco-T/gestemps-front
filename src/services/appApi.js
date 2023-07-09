import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api
export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://gestemp-app.onrender.com/api/" }),
    endpoints: (builder) => ({
        //Sign up and log in
         signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user,
            }),
        }), 

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),
        //
        createSalle: builder.mutation({
            query: (body) => ({
                url: "/salles",
                body,
                method: "POST",
            }),
        }),
        
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useCreateSalleMutation
} = appApi;

export default appApi;