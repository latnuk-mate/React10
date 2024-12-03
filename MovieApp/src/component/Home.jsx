import FilterMovie from "./FilterMovie"
import Footer from "./Footer";
import Hero from "./Hero"
import LatestMovie from "./LatestMovie"
import UpcomingShows from "./UpcomingShows"

export default function Home({api_key}){
 
    function getMovies(type, page, setMovie){
        const url  = `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=en-US&page=${page}`;
        // getting the popular movies;
            fetch(url)  
            .then(res => res.json())
            .then(data => setMovie(data.results))
            .catch(err => console.log(err.code));
    }
    

    return(
        <>
            <Hero />

            <LatestMovie api_key={api_key}/>

            <FilterMovie 
            api_key={api_key}
            getMovies={getMovies}
            />

            <UpcomingShows 
            api_key={api_key}
            getMovies={getMovies}
        
            />

            <Footer />
        
        
        </>

    )
}