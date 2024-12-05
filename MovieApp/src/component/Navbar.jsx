import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"


export default function Navbar({moviedata, filterMovie, setFilterMovie, setSearchMovie, api_key}){
const location = useLocation();

const [value, setValue] = useState('');

useEffect(function(){
    if(location.pathname === '/watch'){
        if(value === ''){
            setFilterMovie(moviedata);
        }
        else{
            const movie = filterMovie.filter((item) => item.name.toLowerCase().includes(value));
            setFilterMovie(movie);
        }
    }

    if(location.pathname === '/'){
        if(value === ''){
            setSearchMovie(null);
        }
    }
}, [value]);


function searchFavMovie(){
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${api_key}&language=en-US&page=1`;
    // getting the popular movies;
    fetch(url)  
    .then(res => res.json())
    .then(data => setSearchMovie(data.results))
    .catch(err => console.log(err.code));
}


    return(
        <div className="navbar max-w-[1200px] m-auto flex justify-between items-center">
            <div className="m-auto md:m-0 flex items-center gap-28 justify-center">
                <div className="img--box w-32 overflow-hidden mt-4">
                 <img src="/logo.png" alt="" className="object-cover"/>
                </div>
                <div>
                <ul className="nav_menu flex items-center gap-3 md:gap-16 list-none text-lg text-gray-100">
                    <li className="">
                        <Link to={"/"} className={location.pathname === "/" ? 'active' : ""}>Home</Link>
                    </li>
                    <li className="">
                        <Link to={"/watch"} className={location.pathname === "/watch" ? 'active' : ""}>WatchList</Link>
                    </li>
                </ul>
                </div>
            </div>

            {/* search bar... */}
            <div className="hidden md:flex items-center bg-zinc-50/10 text-gray-100 rounded-[100px] px-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input 
            type="text" 
            className="outline-none bg-transparent w-full p-2" 
            placeholder={location.pathname === '/' ? "Search favourite Movies..." : "Find Your Movies...."}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            {
                (location.pathname === '/') && (
                    <button onClick={searchFavMovie} className="bg-zinc-300 text-zinc-950 rounded-full px-5 py-2 -mr-5">Search</button>
                )
            }


        </div>

        </div>
    )

}