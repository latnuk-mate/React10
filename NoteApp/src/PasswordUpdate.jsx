import { confirmPasswordReset } from "firebase/auth";
import {useRef, useState } from "react";
import { auth } from "../firebase";

function PasswordVerify({actionCode}) {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef(null);
  const [updatePass, setUpdatePass] = useState(false);
  const [newPass, setNewPass] = useState("");


  function resetPassword(){
    confirmPasswordReset(auth, actionCode, newPass)
    .then(()=>{
      setUpdatePass(true);
    })
    .catch(err => console.error(err.message));
  }



  function setPassVisble(){
      if(visible){
        inputRef.current.type = 'password';
        setVisible(false)
      }else{
        inputRef.current.type = 'text';
        setVisible(true)
      }
  }


  return(
    <div className="shadow-sm shadow-primary--color p-5 rounded-xl w-full md:w-1/2 lg:w-1/3 mt-4 m-auto">
      {
        updatePass ? (
          <div className="text-primary--color">
          <h5 className="font-semibold text-xl mb-3">Password changed!</h5>
          <p className="mb-5 ">You can now sign in with your new password</p>
          <a href="/" className="decoration-none px-5 py-2 bg-element--primary rounded">Login</a>  
          
         </div>

):
(
  <div>
  <h5 className="text-center text-primary--color mb-10 text-xl font-serif">Reset Password</h5>
  <div className="passwordField flex items-center gap-3 mb-5">
  <input
  ref={inputRef}
  type="password" 
  className="border-b-2 border-element--third w-full focus:outline-none p-2" 
  placeholder="New Password"
  onChange={(e)=> setNewPass(e.target.value)}
  />

<div onClick={setPassVisble} className="text-primary--color">
    {
      visible ? (
        <svg 
         xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-eye cursor-pointer" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
      </svg>
  
      ):(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-eye-slash cursor-pointer" viewBox="0 0 16 16">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
      </svg> 
      )
    }
</div>
</div>

{/* save button */}
<button onClick={resetPassword}
className="px-4 py-1 bg-element--primary text-primary--color rounded-md text-lg">
  Save
</button>
</div>
)}
</div>
  
)}

export default PasswordVerify;
