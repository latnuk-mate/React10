import { useLocation } from "react-router-dom"


export default function Navbar(){
const location = useLocation();

    return(
        <div className="navbar max-w-[1200px] m-auto flex justify-between items-center">
            <div className="m-auto md:m-0 flex items-center gap-28 justify-center">
                <div className="img--box w-32 overflow-hidden mt-4">
                 <img src="/logo.png" alt="" className="object-cover"/>
                </div>
                <div>
                <ul className="nav_menu flex items-center gap-3 md:gap-16 list-none text-lg text-gray-100">
                    <li className="">
                        <a href="/" className={location.pathname === "/" ? 'active' : ""}>Home</a>
                    </li>
                    <li className="">
                        <a href="/watch" className={location.pathname === "/watch" ? 'active' : ""}>WatchList</a>
                    </li>
                </ul>
                </div>
            </div>

            {/* search bar... */}
            <div className="hidden md:flex items-center bg-zinc-50/10 text-gray-100 rounded-[100px] px-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input 
            type="text" 
            className="outline-none bg-transparent w-full p-2" 
            placeholder="Search favourite Movies..."
            />
            </div>
        </div>
    )

}