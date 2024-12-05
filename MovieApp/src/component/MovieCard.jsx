
export default function Moviecard({movie, index, likeAndSaveMovie}){


    return(
        <div className="Moviecard mb-2" key={index}>
        <div className="img h-32 overflow-hidden p-2">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`} alt="" 
              className="object-cover h-full w-full object-center rounded-xl"/>
      </div>
      <div className="flex items-center justify-between">
          <div>
              <h5 className="text-gray-200 mb-2 text-sm">{movie.original_title || movie.name}</h5>
              <p className="text-sm text-gray-400">Released: {movie.release_date || movie.first_air_date}</p>
          </div> 
      {/* like icon */}
      <svg onClick={(e) => likeAndSaveMovie(e, index, movie)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="favMovie">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      </div>  
    </div>
    )
} 