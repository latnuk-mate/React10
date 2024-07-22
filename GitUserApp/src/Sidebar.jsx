import { useContext } from "react";
import { Theme } from "./Context";

function Sidebar() {
    const {profile} = useContext(Theme);

  return (
    <div className="border p-3 shadow-sm shadow-slate-300 rounded-sm text-center max-h-[400px] md:max-h-[350px] ">

      {profile && (
        <>
        <div className="m-auto border border-gray-400 w-20 h-20 rounded-full overflow-hidden p-1">
          <img src={profile.avatar_url} alt="userPhoto"/>
        </div>
        <h3 className="text-gray-600 text-xl mt-2">@{profile.login}</h3>
        <h5 className="text-gray-600 mt-2">{profile.bio}</h5>
        <h5 className="text-gray-600 mt-2 flex items-center gap-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
       </svg>
          {profile.location}</h5>
        <a href={profile.html_url} className="text-lg underline" target="_blank">Visit Profile</a>
        <a href={profile.blog || "#"} target ={profile.blog == "" ? "_self" : "_blank"}className="text-lg underline mt-2 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>  
        Twitter</a>
      

        <table className="m-auto border p-3 w-full mt-4 mb-3">
          <thead className="border bg-gray-100">
            <tr>
              <th>Followers</th>
              <th>Following</th>
              <th>Public Repos</th>
            </tr>
          </thead>
        <tbody className="bg-indigo-100">
          <tr>
            <td>
              {profile.followers}
            </td>
            <td>
              {profile.following}
            </td>
            <td>
              {profile.public_repos}
            </td>
          </tr>
        </tbody>
        </table>
        
        </>
   
      )}  
    </div>
  )
}

export default Sidebar;