import { useEffect, useRef, useState } from "react";
import Moviecard from "./MovieCard";
import Loading from "./Loading";

function UpcomingShows({
    api_key,
    getMovies,
    likeAndSaveMovie

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

                    {/* if not movie... */}

                {
                    (link === 'Upcoming' && !upcomingMovies)&& <Loading />
                }

                {
                    (link === 'TV Shows' && !TVshows)&& <Loading />
                }

         <div className="flex items-center gap-4 overflow-x-auto MovieArea mt-8">

            {
                (link === 'Upcoming') && upcomingMovies && upcomingMovies.map((movie, index) => (
                    <div className="flex-shrink-0 w-[18rem]" key={index}>
                        <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/> 
                    </div> 
                ))
                
            }


            {
            (link === 'TV Shows') && TVshows && TVshows.map((movie, index) => (
                <div className="flex-shrink-0 w-[18rem]">
                       <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/> 
                </div>
         ))
         
         }

        </div>
        </div>
  )
}

export default UpcomingShows;

