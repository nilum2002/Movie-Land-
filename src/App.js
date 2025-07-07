
import React from "react";
import { useEffect } from "react";
//bfa8425b
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=bfa8425b";
const movie = {Title: 'Spider Man', Year: '2014', imdbID: 'tt5581814', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNWI2MjBhMG…WI3MWYtMzE0NTEyMjQ4NGI5XkEyXkFqcGc@._V1_SX300.jpg'};

function App() {
  
    const searchMovies = async(title) =>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
    }
  useEffect(() =>{
    searchMovies();
  }, [])
    

    return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className = "search">
        <input placeholder="Search For Movies" value = "Super Man" onChange={() => {}}></input>
        <img src = {searchIcon} alt = "Search" onClick={() => {}}></img>
      </div>
      
      <div className = "container">
        <div className = "movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src = { movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400'} alt = {movie.Title}></img>
          </div>
          <div>
          <span>{movie.Type} </span>
        </div>
        </div>


        
      </div>

    </div>
  );
}

export default App;
