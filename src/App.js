
import React from "react";
import { useEffect } from "react";
//bfa8425b
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=bfa8425b";

function App() {
  
    const searchMovies = async(title) =>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
    }
  useEffect(() =>{
    searchMovies("Spider Man");
  }, [])
    

    return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className = "search">
        <input placeholder="Search For Movies"></input>
      </div>

    </div>
  );
}

export default App;
