import { createContext, useState } from "react";


export const Context = createContext({});

function NoteContext({children}){
    const [ready, setReady] = useState(false);

    return (
        <Context.Provider value={{ready , setReady}}>
        {children}
        </Context.Provider>
    )
}


export default NoteContext;