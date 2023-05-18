import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addMovie } from "../store/store";
import '../css/movies.css'

function MovieSearch() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
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
            setMovies(result.Search);
        } catch (error) {
            console.error(error);
        }
    }




    const movieItems = movies ? movies.map(movie => (
        <li key={movie.imdbID} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <b>{movie.Title}</b>
            {isAuthenticated && (
                <button class="own-button" name="selectedItem" onClick={() => handleAddMovie(movie)}>I own this!</button>
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

    const handleAddMovie = async (movie) => {
        console.log(movie)
        const userId = localStorage.getItem("userId");
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


    return (
        <>
            <div className="searchbar">
                <input type="text" name="Title" onChange={handleSearch} placeholder="Title" />
                <button onClick={handleSubmit}>Search</button>
            </div>
            <ul className="movie-list">
                {movieItems}
            </ul>
        </>

    )
}

export default MovieSearch
