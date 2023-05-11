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

//creating a movie slice here
const movieListSlice = createSlice({
    name: 'movieList',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload)
        },
    },
})

//now we configure the store
    const store = configureStore({
        reducer: {
            auth: authenticationSlice.reducer,
            movieList: movieListSlice.reducer,
        },
    })

    //now we link the actions
    // { } uses destructuring assignment to extract the action creator from the object and immediately assign it to a constant with the same name.
    export const authActions = authenticationSlice.actions
    export const { addMovie } = movieListSlice.actions


    // aaand then we export the store
    export default store