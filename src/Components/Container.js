import React from 'react'
import MovieList from './MovieList'

const Container = () => {
     const films = [
         {id:1,name:'eve', rating:"5"},
         {id:2,name:'evee', rating:"5"},
         {id:3,name:'eveee', rating:"5"}

     ]
    return (
        <div>
            <MovieList films={films} />
            
        </div>
    )
}


export default Container
