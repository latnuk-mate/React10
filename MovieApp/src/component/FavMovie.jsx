import Moviecard from "./MovieCard";

export default function FavMovie({searchMovie, likeAndSaveMovie}){


    return(
        <>
        {
            (searchMovie.length == 0) && (
                <h5 className="text-center text-xl text-zinc-100 mt-8">No Match Found!</h5>
            )
        }

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 app_container">
            {
                searchMovie && searchMovie.map((movie, index)=> (
                    <Moviecard movie={movie} index={index} likeAndSaveMovie={likeAndSaveMovie}/>
                ))
            }
        </div>
        
        
        </>
    )
}