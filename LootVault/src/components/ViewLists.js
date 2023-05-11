import { useState } from "react";


function ViewUsersLists() {


    const fetchUsersMoviesList = async () => {
        const response = await fetch(`/:${userId}/viewMovies`)
        const result = await response.json()
        const usersMovies = result

        //pass the list into props
    }
}