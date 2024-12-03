export default function Footer(){
    return(
        <div className="bg-zinc-900 text-zinc-50 pt-20 px-24 pb-12 mt-32">
               
            <div className="flex items-center md:justify-between flex-col md:flex-row gap-10 justify-center">
               <div className="text-center md:text-left">
                <div className="img--box w-32 overflow-hidden mb-2 m-auto md:m-0">
                    <img src="/logo.png" alt="" className="object-cover"/>
                </div> 
                <h5 className="text-zinc-400">MovieZilla, A hub for movies and TV shows!</h5> 
                </div>

                <div className="sitemap">
                    <h5 className="text-lg mb-1">Sitemap</h5>
                        <div className="flex flex-col">
                            <a href="#" className="text-zinc-400 hover:text-zinc-100 mb-1">Home</a>
                            <a href="#latest" className="text-zinc-400 hover:text-zinc-100 mb-1">Latest Movie</a>
                            <a href="#trend" className="text-zinc-400 hover:text-zinc-100 mb-1">Trending</a>
                            <a href="#upcomingShows" className="text-zinc-400 hover:text-zinc-100 mb-1">Tv Shows</a>
                        </div>
                </div>

                <div className="watchlist--area">
                    <a href="/watch" className="btn">Go To Watchlist</a>
                </div>
            </div>

            <p className="mt-16 text-center text-sm font-light"> &copy; Copyright {new Date().getFullYear()} MovieZilla. All rights reserved. Designed & Developed By 
                <a href="https://github.com/latnuk-mate" 
                className="text-zinc-400" target="_blank"> @latnuk-mate</a>.
            </p>
            
        </div>
    )
}