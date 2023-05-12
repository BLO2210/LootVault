import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import '../css/movieslist.css'


function ViewLists() {

    const [moviesList, setMoviesList] = useState([])

    const fetchMoviesList = async () => {
        try {
            const userId = localStorage.getItem("userId")
            const response = await fetch(`http://localhost:8080/users/${userId}/movies`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const result = await response.json();
            setMoviesList(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMoviesList()
    }, [])
    const moviesListContent = moviesList ? moviesList.map(movie => (
        <li key={movie._id} className="movie-item">
          <img src={movie.poster} alt={movie.title} />
          <b>{movie.title}</b>
          <label htmlFor={`${movie._id}-4k`}>
            <input
              className="movie-item__checkbox"
              type="checkbox"
              id={`${movie._id}-4k`}
              name={`${movie._id}-4k`}
              value="4k"
              checked={movie.is4K}
              onChange={(e) => handleCheckboxChange(movie._id, "is4K", e.target.checked)}
            />
            4K
          </label>
          <label htmlFor={`${movie._id}-bd`}>
            <input
              className="movie-item__checkbox"
              type="checkbox"
              id={`${movie._id}-bd`}
              name={`${movie._id}-bd`}
              value="bd"
              checked={movie.isBD}
              onChange={(e) => handleCheckboxChange(movie._id, "isBD", e.target.checked)}
            />
            BD
          </label>
          <label htmlFor={`${movie._id}-dvd`}>
            <input
              className="movie-item__checkbox"
              type="checkbox"
              id={`${movie._id}-dvd`}
              name={`${movie._id}-dvd`}
              value="dvd"
              checked={movie.isDVD}
              onChange={(e) => handleCheckboxChange(movie._id, "isDVD", e.target.checked)}
            />
            DVD
          </label>
          <label htmlFor={`${movie._id}-vhs`}>
            <input
              className="movie-item__checkbox"
              type="checkbox"
              id={`${movie._id}-vhs`}
              name={`${movie._id}-vhs`}
              value="vhs"
              checked={movie.isVHS}
              onChange={(e) => handleCheckboxChange(movie._id, "isVHS", e.target.checked)}
            />
            VHS
          </label>
          <label htmlFor={`${movie._id}-steelbook`}>
            <input
              className="movie-item__checkbox"
              type="checkbox"
              id={`${movie._id}-steelbook`}
              name={`${movie._id}-steelbook`}
              value="steelbook"
              checked={movie.isSteelbook}
              onChange={(e) => handleCheckboxChange(movie._id, "isSteelbook", e.target.checked)}
            />
            Steelbook
          </label>
        </li>
      )) : '';
      
    // const moviesListContent = moviesList ? moviesList.map(movie => (
    //     <li key={movie._id} className="movie-item">
    //       <img className="movie-item" src={movie.poster} alt={movie.title} />
    //       <b className="movie-item">{movie.title}</b>
    //       <label className="movie-item__label" htmlFor={`${movie._id}-4k`}>
    //         <input
    //           className="movie-item__checkbox"
    //           type="checkbox"
    //           id={`${movie._id}-4k`}
    //           name={`${movie._id}-4k`}
    //           value="4k"
    //           checked={movie.is4K}
    //           onChange={(e) => handleCheckboxChange(movie._id, "is4K", e.target.checked)}
    //         />
    //         4K
    //       </label>
    //       <label className="movie-item__label" htmlFor={`${movie._id}-bd`}>
    //         <input
    //           className="movie-item__checkbox"
    //           type="checkbox"
    //           id={`${movie._id}-bd`}
    //           name={`${movie._id}-bd`}
    //           value="bd"
    //           checked={movie.isBD}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isBD", e.target.checked)}
    //         />
    //         BD
    //       </label>
    //       <label className="movie-item__label" htmlFor={`${movie._id}-dvd`}>
    //         <input
    //           className="movie-item__checkbox"
    //           type="checkbox"
    //           id={`${movie._id}-dvd`}
    //           name={`${movie._id}-dvd`}
    //           value="dvd"
    //           checked={movie.isDVD}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isDVD", e.target.checked)}
    //         />
    //         DVD
    //       </label>
    //       <label className="movie-item__label" htmlFor={`${movie._id}-vhs`}>
    //         <input
    //           className="movie-item__checkbox"
    //           type="checkbox"
    //           id={`${movie._id}-vhs`}
    //           name={`${movie._id}-vhs`}
    //           value="vhs"
    //           checked={movie.isVHS}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isVHS", e.target.checked)}
    //         />
    //         VHS
    //       </label>
    //       <label className="movie-item__label" htmlFor={`${movie._id}-steelbook`}>
    //         <input
    //           className="movie-item__checkbox"
    //           type="checkbox"
    //           id={`${movie._id}-steelbook`}
    //           name={`${movie._id}-steelbook`}
    //           value="steelbook"
    //           checked={movie.isSteelbook}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isSteelbook", e.target.checked)}
    //         />
    //         Steelbook
    //       </label>
    //     </li>
    //   )) : '';
      

    // const moviesListContent = moviesList ? moviesList.map(movie => (
    //     <li key={movie._id} className="movie-item">
    //       <img className="movie-item__poster" src={movie.poster} alt={movie.title} />
    //       <b className="movie-item__title">{movie.title}</b>
    //       <label className="movie-item__checkbox-label" htmlFor={`${movie._id}-4k`}>
    //         <input
    //           className="movie-item__checkbox-input"
    //           type="checkbox"
    //           id={`${movie._id}-4k`}
    //           name={`${movie._id}-4k`}
    //           value="4k"
    //           checked={movie.is4K}
    //           onChange={(e) => handleCheckboxChange(movie._id, "is4K", e.target.checked)}
    //         />
    //         4K
    //       </label>
    //       <label className="movie-item__checkbox-label" htmlFor={`${movie._id}-bd`}>
    //         <input
    //           className="movie-item__checkbox-input"
    //           type="checkbox"
    //           id={`${movie._id}-bd`}
    //           name={`${movie._id}-bd`}
    //           value="bd"
    //           checked={movie.isBD}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isBD", e.target.checked)}
    //         />
    //         BD
    //       </label>
    //       <label className="movie-item__checkbox-label" htmlFor={`${movie._id}-dvd`}>
    //         <input
    //           className="movie-item__checkbox-input"
    //           type="checkbox"
    //           id={`${movie._id}-dvd`}
    //           name={`${movie._id}-dvd`}
    //           value="dvd"
    //           checked={movie.isDVD}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isDVD", e.target.checked)}
    //         />
    //         DVD
    //       </label>
    //       <label className="movie-item__checkbox-label" htmlFor={`${movie._id}-vhs`}>
    //         <input
    //           className="movie-item__checkbox-input"
    //           type="checkbox"
    //           id={`${movie._id}-vhs`}
    //           name={`${movie._id}-vhs`}
    //           value="vhs"
    //           checked={movie.isVHS}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isVHS", e.target.checked)}
    //         />
    //         VHS
    //       </label>
    //       <label className="movie-item__checkbox-label" htmlFor={`${movie._id}-steelbook`}>
    //         <input
    //           className="movie-item__checkbox-input"
    //           type="checkbox"
    //           id={`${movie._id}-steelbook`}
    //           name={`${movie._id}-steelbook`}
    //           value="steelbook"
    //           checked={movie.isSteelbook}
    //           onChange={(e) => handleCheckboxChange(movie._id, "isSteelbook", e.target.checked)}
    //         />
    //         Steelbook
    //       </label>
    //     </li>
    //   )) : '';
      

    const handleCheckboxChange = async (movieId, checkboxName, isChecked) => {
        try {
            const userId = localStorage.getItem("userId");
            const response = await fetch(`http://localhost:8080/users/${userId}/movies/${movieId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ [checkboxName]: isChecked}),
            });

            const updatedMovie = await response.json();
       
            setMoviesList((prevMoviesList) => prevMoviesList.map((movie) => movie._id === updatedMovie._id ? updatedMovie : movie));
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <ul className="movie-list">
                {moviesListContent}
            </ul>
        </>
    )
}


export default ViewLists