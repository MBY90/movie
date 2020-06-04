import React from 'react'

const MovieCard = (props) => {
    const {film} = props
    return (
        <div key={film.id}>
            <p>{film.name}</p>
            <p>{film.rating}</p>
            
        </div>
    )
}




export default MovieCard
