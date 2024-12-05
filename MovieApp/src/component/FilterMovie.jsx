import {useEffect, useRef, useState } from "react";
import Moviecard from "./MovieCard";
import Loading from "./Loading";

function FilterMovie(
  {
    api_key,
    getMovies,
    likeAndSaveMovie

  }
) {

      const element = useRef();
      const [link, setLink] = useState('Popular');

      // movie states...
      const [popular, setPopular] = useState(null);
      const [topRated, setTopRated] = useState(null);
      const [trending, setTrending] = useState(null);

      
      useEffect(function(){
        getMovies('popular', 15, setPopular);

      // calling the function..
      if(link == 'Top Rated'){
        getMovies('top_rated', 5, setTopRated);
      }

      if(link == 'Trending'){
          getTrendingMovie()
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

    function getTrendingMovie(){
      const url  = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=en-US`;
        fetch(url)  
        .then(res => res.json())
        .then(data => setTrending(data.results))
        .catch(err => console.log(err.code));
    }



  return (
    <div className="app_container" id="trend">
        <h5 className="headingText">Search By Categories</h5>
        <p className="subHeadingText">Find and discover your best movies</p>

        <div className="filter--box mt-10 flex items-center gap-16 justify-center text-zinc-50 mb-5 text-lg" ref={element}>
          <button className="active" onClick={(e) => setActive(e)}>Popular</button>
          <button onClick={(e) => setActive(e)}>Top Rated</button>
          <button onClick={(e) => setActive(e)}>Trending</button>
        </div>

        {/* dynamic rendering... */}

                {/* if not movie... */}
                {
                    (link === 'Popular' && !popular)&& <Loading />
                }

                {
                    (link === 'Top Rated' && !topRated)&& <Loading />
                }

                {
                    (link === 'Trending' && !trending)&& <Loading />
                }

          <div className="grid mt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-3 lg:p-0">

          {
            (link === 'Popular') && popular && popular.map((movie, index) => (
                <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/>
            ))
          }

          {
            (link === 'Top Rated') && topRated && topRated.map((movie, index) => (
              <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/>
            ))
          }

          {
            (link === 'Trending') && trending && trending.map((movie, index) => (
              <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/>
            ))
          }
        </div>

    </div>
  )
}

export default FilterMovie;