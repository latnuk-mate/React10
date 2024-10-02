
import {useLocation } from "react-router-dom";
import EmailVerify from "./EmailVerify";
import PasswordVerify from "./PasswordUpdate";


function Authentication() {
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const actionCode = urlParams.get('oobCode');
    const mode = urlParams.get('mode');
    console.log(mode)

    if(mode === "verifyEmail"){
      return <EmailVerify actionCode={actionCode} />

    }else{
      return <PasswordVerify actionCode={actionCode} />
    }

}


export default Authentication;