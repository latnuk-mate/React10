import Controls from "./Controls"
import Repos from "./Repos"
import Sidebar from "./Sidebar"
import { useContext} from "react"
import { Theme } from "./Context"
import Spinner from './assets/spinner.gif'


function App() {
  const {profile, repo, text} = useContext(Theme);

  return (
    <div className="m-4">
        <Controls />
        
    {(!profile && !repo) &&(
      <div className="justify-center text-xl text-gray-600 flex items-center gap-2 mt-8">
        {text}
      
          {text && (
            <img src={Spinner} alt="" width={40}/>
          )}
      </div>
    ) }

        {(profile && repo) && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <Sidebar />
                <Repos />
          </div>
        )}

       
    </div>
  )
}


export default App;
