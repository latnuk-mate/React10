import Navbar from "./component/Navbar";
import Watchlist from './component/Watchlist'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;


function App() {

  return (
        <Routes>
        <Route index element={<><Navbar/> <Home api_key={api_key}/></>}/>
        <Route path="/watch" element={<><Navbar/> <Watchlist /></>}/>
        </Routes>
  )
}

export default App;
