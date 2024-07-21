import { useContext } from "react"
import { Theme } from "./Context"


function Repos() {

    function styledLanguage(language){
   
         switch(language){
            case "Python":
                return "yellow";
            case "Java":
                return "violet";
            case "JavaScript":
                return "aqua"; 
            case "CSS":
                return "red";  
            case "Shell":
                return "chocolate";       
            case "PHP":
                return "brown";
            case "Ruby":
                return "orangered";
            default:
                return "goldenrod";

        }
    }

const {repo} = useContext(Theme);

  return (
    <div className="col-span-2">
    <div className="shadow-sm shadow-slate-200 p-3 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border">
        {!!repo && repo.map((repos)=> 
            <div className="border p-3 rounded-md text-gray-600" key={repos.id}>
                <h4 className="mb-2 font-semibold text-lg">{repos.name}</h4>
                <p className="mb-2 font-sans">{repos.description}</p>
                <a href={repos.html_url} className="underline font-bold">Visit Repository</a>
            <div className="flex justify-evenly items-center mt-3">
                <h5 className="flex items-center gap-1">
                    <div className="rounded-full python w-[10px] h-[10px]" style={{"background-color": styledLanguage(repos.language)}}></div>
                    {repos.language}
                </h5>
            <p>Watchers- {repos.watchers_count}</p>
            </div>

            </div>
        
        )}
    </div>
    </div>

  )
}

export default Repos