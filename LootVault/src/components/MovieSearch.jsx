import { useState, useEffect } from "react";

function MovieSearch() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState ('')

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=`);
            const result = await response.json();
            setMovies(result.Search);
        } catch (error) {
            console.error(error);
        }
    }

  
    

    const movieItems = movies ? movies.map(movie => (
        <li key={movie.imdbID}>
            <b>{movie.Title}</b>
            <img src={movie.Poster} alt={movie.Title} />
        </li>
    )) : '';
    

    const handleSearch = (e) => {
        const search = e.target.value
        console.log(search)
        setSearch(search)
    }

    const handleSubmit = () => {
        fetchMovies()
    }
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
