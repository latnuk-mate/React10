import { useEffect, useState } from "react";
import FilterMovie from "./FilterMovie"
import Footer from "./Footer";
import Hero from "./Hero"
import LatestMovie from "./LatestMovie"
import UpcomingShows from "./UpcomingShows"
import FavMovie from "./FavMovie";

export default function Home({api_key, setMovieData, searchMovie}){

    function getMovies(type, page, setMovie){
        const url  = `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=en-US&page=${page}`;
        // getting the popular movies;
            fetch(url)  
            .then(res => res.json())
            .then(data => setMovie(data.results))
            .catch(err => console.log(err.code));
    }
    

    function likeAndSaveMovie(e, index, movie){
        e.target.classList.add('active');
        const movieObj = {
            id: index,
            active: true,
            name: movie.original_title || movie.name,
            img: movie.backdrop_path,
            date: movie.release_date || movie.first_air_date 
        }

        setMovieData(prevMovie => {
            return [ ...prevMovie , movieObj]
        });


    }


    if(searchMovie){
        return(
            <>
                <FavMovie />
                <Footer />
            </>
        )
    }else{
        return(
            <>
                <Hero />
    
                <LatestMovie api_key={api_key} likeAndSaveMovie={likeAndSaveMovie}/>
    
                <FilterMovie 
                api_key={api_key}
                getMovies={getMovies}
                likeAndSaveMovie={likeAndSaveMovie}
    
                />
    
                <UpcomingShows 
                api_key={api_key}
                getMovies={getMovies}
                likeAndSaveMovie={likeAndSaveMovie}
            
                />
    
                <Footer />
            
            </>
        )
    }

}