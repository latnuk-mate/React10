import { 
    createUserWithEmailAndPassword, 
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword, 
    signInWithPopup
    } from "firebase/auth";
import { auth, provider } from "../firebase";
import {useContext, useState } from "react";
import Flash from "./Flash";
import { NoteProvider } from "./NoteContext";
import { Navigate } from "react-router-dom";



function Home({setText, setBgColor, setTextColor, text, textColor, animateBorder, bgColor}) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState("");

    const {user, flash, setFlash} = useContext(NoteProvider);

    if(user){
        return <Navigate to={'/dashboard'} replace={true} />
    }

    // for sign up with google...
    function GoogleSign(){
        signInWithPopup(auth, provider)
        .then(() => {
            setText("SignIn Successfully!")
            setBgColor("#15B392")
            setTextColor("#EAF6F6")
            setFlash(true);
        }).catch(() => {
            setText("Something error occured! Please try later")
            setBgColor("#dc2626")
            setTextColor("#fafafa")
            setFlash(true);
        });
    }

    // email & password sign up process...
    
    function signUpWithEmailAndPassword(email, password){
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                // check if the email is verified then proceed with the dashboard!
                const actionCodeSetUp = {
                    url: `${window.location.origin}/auth/user`,
                    handleCodeInApp: true,
                  }
                
                sendEmailVerification(user, actionCodeSetUp)
                .then(() => {
                    setText("Verification email sent to your email.")
                    setBgColor("#fcd34d")
                    setTextColor('#111827')
                    setFlash(true);
                })
                .catch((error)=>{
                    console.error(error.message);
                    setText("Something error occured! Please try later")
                    setBgColor("#dc2626")
                    setTextColor("#fafafa")
                    setFlash(true);
                })
            })
            .catch(err => {
                setText("Email already in use!")
                setBgColor("#dc2626")
                setTextColor("#fafafa")
                setFlash(true);
                console.error(err.message);
            });
    }


    function SignInWithEmailAndPassword(email, password){
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setText("SignIn Successfully!")
                setBgColor("#15B392")
                setTextColor("#EAF6F6")
                setFlash(true);
                // alert('login successfully')
                })
                .catch(() => {
                    setText("Invalid Credentials!")
                    setBgColor("#dc2626")
                    setTextColor("#fafafa")
                    setFlash(true);
    
                });
    }


// password reset function
function PasswordReset(){
    sendPasswordResetEmail(auth, Email)
    .then(()=>{
        setText("Password reset email link sent to your email.")
        setBgColor("#fcd34d")
        setTextColor('#111827')
        setFlash(true);
    })
    .catch(err => {
        console.log(err.code);
        setText("Something error occured! Please try later")
        setBgColor("#dc2626")
        setTextColor("#fafafa")
        setFlash(true);
    })
}


  return (
    <>
     {
        (flash) &&(
            <Flash
            onFlash={setFlash} 
            animateBorder={animateBorder} 
            text={text}
            bgColor={bgColor}
            textColor={textColor}
            />
        )
    }
    
    <div className="flex justify-center items-center min-h-screen pt-5 pb-4 md:pt-0 md:pb-0">
            <div className="shadow-sm shadow-primary--color flex items-center flex-col md:flex-row p-4 gap-5">
                {/* first part... */}
               <div className="p-3 rounded-md flex items-center justify-center w-[400px] h-[450px]">
            <div className="text--area text-center">
                <h5 
            className="dropText text-5xl dancing--script mb-3 flex items-center gap-3 justify-center text-secondary--color">
                {/* animate the text */}
                PenNotes
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
     </svg>
         </h5>
                <p className="font-serif text-primary--color">Welcome to PenNotes! Here, capturing your 
                ideas and organizing your thoughts is effortless. 
                Start organizing your ideas today and make every note count!</p>
            </div>
        </div> 
        {/* second part */}

    <div className="px-8 py-2 w-[400px] h-[450px] pt-10">
    <button
    onClick={GoogleSign}
className="flex items-center justify-center gap-3 mb-5 bg-transparent text-lg font-medium text-primary--color border border-element--third px-5 py-2 rounded-3xl w-full bg-element--primary hover:bg-element--secondary">
 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
     </svg>
        Sign In With Google
</button>

<p className="text-center text-secondary--color mb-4">Or, Continue With Email</p>

<div className="email--login--area mb-4 text-primary--color">
<label htmlFor="userName">Email</label>
    <input 
    type="email" 
    className="w-full px-5 py-2 mb-3 rounded-md focus:border-element--third focus:outline-none text-element--secondary"
    value={Email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Your Email"/>

<label htmlFor="password">Password</label>
    <input 
    type="password" 
    className="w-full px-5 py-2 mb-2 rounded-md focus:border-element--third focus:outline-none text-element--secondary"
    value={Password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Your Password"/>

    <span 
    className="decoration-none text-secondary--color flex justify-end mb-3 cursor-pointer"
    onClick={PasswordReset}>
        Forget Password?
    </span>

    <button type="submit"
    onClick={()=> SignInWithEmailAndPassword(Email, Password)}
    className="w-full text-lg font-medium text-primary--color bg-element--primary border border-element--third px-5 py-2 mb-3 rounded-3xl">
        Sign In
    </button>

    <button type="submit"
    onClick={() => signUpWithEmailAndPassword(Email, Password)}
    className="w-full text-lg font-medium text-primary--color bg-transparent px-5 py-2 mb-2 rounded-3xl border-2 border-element--third bg-element--secondary">
        Create An Account
    </button>
</div>
</div>
</div>
     
</div>
 </>



)}

export default Home;