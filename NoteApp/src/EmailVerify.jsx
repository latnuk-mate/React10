import { applyActionCode } from "firebase/auth"
import { useContext, useEffect, useState } from "react"
import { auth } from "../firebase"
import { NoteProvider } from "./NoteContext";
import { Link } from "react-router-dom";


function EmailVerify({actionCode}) {

    const [isVerifiedMail , setIsVerifiedMail] = useState(false);

    const {setUser} = useContext(NoteProvider);

    useEffect(function(){
        async function verifyMail() {
            try {
                   await applyActionCode(auth, actionCode)
                    setUser(auth.currentUser)
                    setIsVerifiedMail(true)
            } catch (error) {
                console.log(error.message)
            }
    }

    if(actionCode){
        verifyMail();
    }

}, [actionCode])

  return (
    isVerifiedMail ? (
        <div className="m-auto mt-5 shadow-sm shadow-primary--color border p-3 rounded-sm text-center w-full md:w-1/3 text-primary--color">
           <p className="text-xl md:text-2xl font-semibold mb-3">Your Mail has been verified.</p>
        <Link to={'/Dashboard'} 
        className="text-lg text-secondary--color">Go To Dashboard</Link>
        </div>
    )
    :
    (
    <div 
    className="text-primary--color m-auto text-center mt-5 shadow-sm border shadow-primary--color p-3 rounded-sm w-full md:w-1/3 font-semibold text-xl">
      Verifying your email...
    </div>
      
  )
  )
}

export default EmailVerify;