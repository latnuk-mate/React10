import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";



export const NoteProvider = createContext(null); 

function NoteContext({children}) {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(true);
    const [flash, setFlash] = useState(false);
    

    useEffect(function(){
       onAuthStateChanged(auth, (user)=>{
        // Cheking if the user has verified email!
        if(user?.emailVerified){
          setUser(user)
          setIsReady(false)
        }else{
           setIsReady(false)
        }
        });
      
      }, []);

      if(isReady){
          return (
            <Loading />
          )
      }


      return(
        <NoteProvider.Provider value={{user, setUser, flash, setFlash}}>
            {children}
        </NoteProvider.Provider>
      )


}

export default NoteContext;