import React, { useContext, useState } from 'react'
import { Theme } from './Context';

function Controls() {
const [user, setUser] = useState('');

const {setProfile, setRepo,setText} = useContext(Theme);

async function getRepo(){
    const res = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await res.json();
    setRepo(data); 
}


async function userDetailsFetch(){
    // clean up the data first....
    setRepo(null);
    setProfile(null);


    if(user === ""){
          alert('Please specify a user name...');
          return false;
    }
    
    // set a demo text to implement loading UI
    setText("Loading data...");

    const response = await fetch(`https://api.github.com/users/${user}`);
    const res = await response.json();
    // call the repo function...
    getRepo();

    // set up the user profile....
    setProfile(res);
}


  return (
    
    <div className='flex m-auto justify-center items-center shadow-sm shadow-slate-500 p-3 max-w-full  md:w-[500px] mt-10 gap-4'>
        <h4 className='flex items-center gap-2 text-xl'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>   
            GitHub
    </h4>
    <div className='flex justify-center items-center md:gap-3 border rounded-full border-slate-400 w-full'>
    <span className='mr-1 text-lg text-gray-800'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>
    </span>

        <input type="text" name="userSearch" className=" focus:outline-none rounded-sm px-1 md:px-4 py-1"
            placeholder='Search a User'
            value={user}
            onChange={(e)=> setUser(e.currentTarget.value)}
        />
    </div>
    <button className='bg-gray-600 text-white text-lg rounded-md p-1 px-3' onClick={userDetailsFetch}>Search</button>
    </div>
  )
}

export default Controls