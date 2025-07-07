
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./Moviecard";
//bfa8425b
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=bfa8425b";


function App() {
  const [Movies, SetMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

    const searchMovies = async(title) =>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
      SetMovies(data.Search);
    }
  useEffect(() =>{
    searchMovies(searchTerm);
  }, [searchTerm])
    

    return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className = "search">
        <input placeholder="Search For Movies" value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value) }></input>
        <img src = {searchIcon} alt = "Search" onClick={() => searchMovies(searchTerm)}></img>
      </div>
      <div className = "container">
      {
        Movies?.length > 0
          ? (
            <div className = "container">
              {Movies.map((movie)=> (
                  <MovieCard movie={movie} />
              ))}
              
            </div>
            ) : (
              <div className = "empty"> 
                <h2>No Movies Found </h2>
              </div>
            )
      }
      
      </div>
    </div>
  );
}

export default App;
