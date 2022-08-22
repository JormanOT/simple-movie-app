import React from 'react'

function MovieCard({ movie }) {
    return (
        <div className='movie' key={movie.imdbID}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img alt='Poster' src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400" } />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard