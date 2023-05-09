import { createSlice, configureStore } from "@reduxjs/toolkit"

const authenticationInitialState = {
    isAuthenticated: false
}

//creating a slice here
const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authenticationInitialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

//now we configure the store
    const store = configureStore({
        reducer: {
            auth: authenticationSlice.reducer
        }
    })

    //now we link the actions
    export const authActions = authenticationSlice.actions


    // aaand then we export the store
    export default store