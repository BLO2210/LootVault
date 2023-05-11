import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
//must create a slice for the list below
import { addMovie } from "../store/store";

function MovieSearch() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState ('')
    const [selectedMovies, setSelectedMovies] = useState([]);


    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth)

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=9efdd8db`)
            const result = await response.json();
            setMovies(result.search);
        } catch (error) {
            console.error(error);
        }
    }

  
    

    const movieItems = movies ? movies.map(movie => (
        <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <b>{movie.Title}</b>
            {isAuthenticated && (
                <button name = "selectedItem" onClick = {() => handleAddMovie(movie)}>I own this!</button>
            )}
        </li>
    )) : '';
    

    const handleSearch = (e) => {
        const search = e.target.value
        setSearch(search)
    }

    const handleSubmit = () => {
        fetchMovies()
    }

    // const handleAddMovie =  async (movie) => {
    //     setSelectedMovies([...selectedMovies, movie])
    //     // dispatch(addMovie(movie))
    // }

    const handleAddMovie = async (movie) => {
        console.log(movie)
        const userId = localStorage.getItem("userId")  ; // Replace with the current user's ID
        try {
            console.log(`http://localhost:8080/${userId}/addMovies`);
          const response = await fetch(`http://localhost:8080/${userId}/addMovies`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ movie: [movie.Poster, movie.Title] }),
          });
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };

    // const handleSelect = (movie) => {
    //     const setSelectedMovies((prevSelectedMovies) => {
    //         const isSelected = prevSelectedMovies.some((m) => m.imdbID === movie.imdbID)
    //         return isSelected
    //         ? prevSelectedMovies.filter((m) => m.imdbID !== movie.imdbID)
    //         : [...prevSelectedMovies, movie]
    //     })
    // }

    return (
        <>
        <input type = "text" name = "Title" onChange = {handleSearch} placeholder = "Title"/>
        <button onClick={handleSubmit}>Search</button>
        <ul>
        {movieItems}
        </ul>
        </>
    )
}

export default MovieSearch
