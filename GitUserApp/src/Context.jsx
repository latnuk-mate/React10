import { createContext } from "react";
import { useState } from "react";

export const Theme = createContext(null);


function Context({children}) {
    const [text, setText] = useState('');
    const [profile , setProfile] = useState(null);
    const [repo , setRepo] = useState(null);

    
    return(
        <Theme.Provider value={{profile, setProfile, repo, setRepo, text, setText}}>
            {children}
        </Theme.Provider>
    )

}

export default Context;