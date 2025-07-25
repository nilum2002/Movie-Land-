import React from "react";
import noImage from './img/no_img.png';

const MovieCard = ({movie}) => {
    return(
        
            <div className = "movie">
                <div>
                    <p>{movie.Year}</p>
                </div>
            <div>
                <img src = { movie.Poster !== 'N/A' ? movie.Poster: noImage} alt = {movie.Title}></img>
            </div>
            <div>
                <span>{movie.Type} </span>
                <h3>{movie.Title}</h3>
            </div>
            </div>
        
    )
}


export default MovieCard;