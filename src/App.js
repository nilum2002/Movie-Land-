
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./Moviecard";
//bfa8425b
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = "https://www.omdbapi.com?apikey=bfa8425b";


function App() {
  const [Movies, SetMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [deBouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    const searchMovies = async(title) =>{

      if (title.trim() === ""){
        SetMovies([]);
      }
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
      SetMovies(data.Search);
    }

  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      searchMovies(searchTerm);
    }
  }
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm])
  useEffect(() =>{
    searchMovies(deBouncedSearchTerm);
  }, [deBouncedSearchTerm])
    

    return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className = "search">
        <input 
          placeholder="Search For Movies" 
          value = {searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value) } 
          onKeyDown ={handleKeyPress} >

        </input>
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
