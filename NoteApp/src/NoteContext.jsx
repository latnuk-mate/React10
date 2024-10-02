import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";



export const NoteProvider = createContext(null); 

function NoteContext({children}) {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(true);
    

    useEffect(function(){
       onAuthStateChanged(auth, (user)=>{
        // Cheking if the user has verified email!
        if(user?.emailVerified){
          console.log(user)
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
        <NoteProvider.Provider value={{user, setUser}}>
            {children}
        </NoteProvider.Provider>
      )


}

export default NoteContext;