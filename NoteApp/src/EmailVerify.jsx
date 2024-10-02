import { applyActionCode } from "firebase/auth"
import { useContext, useEffect } from "react"
import { auth } from "../firebase"
import { NoteProvider } from "./NoteContext";


function EmailVerify({actionCode}) {

    const [isVerifiedMail , setIsVerifiedMail] = useState(false)

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
        <div className="m-auto mt-5 shadow-md border p-3 rounded-sm text-center w-1/3">
           <p className="text-2xl font-semibold mb-3">Your Mail has been verified.</p>
        <Link to={'/Dashboard'} 
        className="text-lg text-blue-600">Go To Dashboard</Link>
        </div>
    )
    :
    (
    <div 
    className="m-auto text-center mt-5 shadow-md border p-3 rounded-sm w-1/3 font-semibold text-xl">
      Verifying your email...
    </div>
      
  )
  )
}

export default EmailVerify;