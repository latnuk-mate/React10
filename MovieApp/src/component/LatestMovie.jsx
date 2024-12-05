import { useEffect, useState } from "react"
import Moviecard from "./MovieCard";
import Loading from "./Loading";

export default function LatestMovie({api_key, likeAndSaveMovie}){
    
    const [latestMovie, setLatestMovie] = useState(null);

    useEffect(function(){
      const url  = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    // getting the movies;
      fetch(url)  
      .then(res => res.json())
      .then(data => setLatestMovie(data.results))
      .catch(err => console.log(err.code));

    }, []);
    

    return(
        <div className="app_container" id="latest">
            <h5 className="headingText capitalize mb-4">Latest release</h5>
            <p className="capitalize subHeadingText">Checkout the latest released movies </p>

                       {/* if not movie.. */}
                {
                    (!latestMovie)&& <Loading />
                }

            <div className="flex items-center gap-4 overflow-x-auto MovieArea mt-5 mb-20">
                {
                    latestMovie && latestMovie.map((movie, index) => (
                        <div className="flex-shrink-0 w-[18rem]" key={index}>
                           <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/> 
                        </div>
                        
                    ))
                }
            </div>
        </div>
    ) 
}