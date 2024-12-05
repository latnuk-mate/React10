export default function({moviedata, setMovieData, filterMovie}){
  

    function removeMovie(id){
        // filter not deleted movies...
        const data = moviedata.filter(item => item.id !== id);
        // update the localStorage...
        localStorage.setItem('movie', JSON.stringify(data));

        // update the state..
        setMovieData(data);
    }

    return (
        <>
            {
                (moviedata.length == 0 && filterMovie.length == 0) && (<div className="text-zinc-100 text-xl text-center mt-10">No Movies Available...</div>)
            }
        <div className="app_container mt-10">
            {
               (moviedata.length > 0 || filterMovie.length > 0) && (
                <>
            <h5 className="text-center text-xl text-zinc-100">Your favourite list of Movies...</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mb-16">
        { filterMovie.map((movie, index)=> (
        <div className="Moviecard mb-2" key={index}>
            <div className="img h-32 overflow-hidden p-2">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.img}`} alt="" 
                className="object-cover h-full w-full object-center rounded-xl"/>
        </div>
        <div className="flex items-center justify-between">
            <div>
                <h5 className="text-gray-200 mb-2 text-sm">{movie.name}</h5>
                <p className="text-sm text-gray-400">Released: {movie.date}</p>
            </div>
            <svg  onClick={() => removeMovie(movie.id)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-500 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </div>
        </div>
        ))}
        </div>                       
        </>
)}
        

</div>

</>
)}