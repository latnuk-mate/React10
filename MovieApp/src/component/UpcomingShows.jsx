import { useEffect, useRef, useState } from "react";
import Moviecard from "./MovieCard";

function UpcomingShows({
    api_key,
    getMovies

}) {

    const element = useRef();
    const [link, setLink] = useState('Upcoming');

    const [upcomingMovies, setUpcomingMovies] = useState(null);
    const [TVshows, setTVshows] = useState(null);


    useEffect(function(){
        getMovies('upcoming', 5, setUpcomingMovies);

        if(link == 'TV Shows'){
            getTVShowsList()
        }
    
      }, [link]);

      
      function setActive(e){
        Array.from(element.current.children).forEach(item => {
            Array.from(element.current.children).forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        });
        
        // setting the taget...
        setLink(e.target.innerText);
    }



      function getTVShowsList(){
        const url  = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;
          fetch(url)  
          .then(res => res.json())
          .then(data => setTVshows(data.results))
          .catch(err => console.log(err.code));
      }

  return (
    <div className="app_container" id="upcomingShows">
        <h5 className="headingText">Movie and TV Shows</h5>
        <p className="subHeadingText">Find and Discover the Upcoming Movie and TV Shows</p>

        <div className="filter--box mt-10 flex items-center gap-16 justify-center text-zinc-50 mb-5 text-lg" ref={element}>
          <button onClick={(e) => setActive(e)} className="active">Upcoming</button>
          <button onClick={(e) => setActive(e)}>TV Shows</button>
        </div>


        {/* dynamic rendering... */}

         <div className="flex items-center gap-4 overflow-x-auto MovieArea mt-8">
            {
                (link === 'Upcoming') && upcomingMovies && upcomingMovies.map((movie, index) => (
                    <div className="flex-shrink-0 w-[18rem]" key={index}>
                        <Moviecard movie={movie} index={index} /> 
                    </div> 
                ))
                
            }


            {
            (link === 'TV Shows') && TVshows && TVshows.map((movie, index) => (
                <div className="flex-shrink-0 w-[18rem]">
                <div className="Moviecard mb-3" key={index}>
                <div className="img h-32 overflow-hidden p-2">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" 
                    className="object-cover h-full w-full object-center rounded-xl"/>
            </div>
                <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-gray-200 mb-2 text-sm">{movie.name}</h5>
                    <p className="text-sm text-gray-400">Released: {movie.first_air_date}</p>
                </div> 
                    {/* like icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-200 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                </div>  
                </div>
                </div>
         ))
         
         }

          </div>
        </div>
  )
}

export default UpcomingShows;