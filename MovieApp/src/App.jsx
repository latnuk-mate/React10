import Navbar from "./component/Navbar";
import Watchlist from './component/Watchlist'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;


function App() {

  const [moviedata, setMovieData] = useState(JSON.parse(localStorage.getItem('movie')) || []); // for storing movies...

  const [filterMovie, setFilterMovie] = useState(moviedata);

  const [searchMovie, setSearchMovie] = useState(null);

  useEffect(function(){
    localStorage.setItem('movie', JSON.stringify(moviedata || ""));
    setFilterMovie(moviedata); // updating after saving...
}, [moviedata])




  return (
        <Routes>
        <Route index element={<><Navbar api_key={api_key} moviedata={moviedata} filterMovie={filterMovie} setFilterMovie={setFilterMovie} setSearchMovie={setSearchMovie}/> <Home api_key={api_key} setMovieData={setMovieData} searchMovie={searchMovie}/></>}/>
        <Route path="/watch" element={<><Navbar moviedata={moviedata} filterMovie={filterMovie} setFilterMovie={setFilterMovie}/> <Watchlist moviedata={moviedata} setMovieData={setMovieData} filterMovie={filterMovie}/></>}/>
        </Routes>
  )
}

export default App;
