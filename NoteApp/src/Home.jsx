import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useState } from "react";


function Home({setUser, setReady}) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState("");

    // for sign up with google...
    function GoogleSign(){
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log('signed in with google..');
            setUser(result.user);
            setReady(true)
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }



    // email & password sign up process...
    
    function signUpWithEmailAndPassword(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          setReady(true)
        })
        .catch((error) => {
          console.log(error.message)
        });
    }


    function SignInWithEmailAndPassword(email, password){
        signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setUser(userCredential.user);
                    setReady(true)
                })
                .catch((error) => {
                    console.log(error.message)
                });
    }



  return (
    <div className="flex justify-center items-center flex-col md:flex-row min-h-screen gap-10 pt-5 pb-4 md:pt-0 md:pb-0">
        <div className="bg-gray-50 p-3 rounded-md flex items-center justify-center w-[400px] h-[450px] shadow-md border">
            <div className="text--area text-center">
                <h5 
            className="dropText text-5xl text-amber-500 dancing--script mb-3 flex items-center gap-3 justify-center">
                {/* animate the text */}
                PenNotes
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
     </svg>
         </h5>
                <p className="font-serif">Welcome to PenNotes! Here, capturing your 
                ideas and organizing your thoughts is effortless. 
                Start organizing your ideas today and make every note count!</p>
            </div>
        </div>

    {/* second part */}

    <div className="shadow-sm p-3 w-[400px] h-[450px] pt-10">
    <button
    onClick={GoogleSign}
className="flex items-center justify-center gap-3 mb-5 bg-transparent text-lg font-medium text-gray-600 border-2 border-amber-400 px-5 py-2 rounded-2xl w-full hover:bg-amber-400 hover:text-white">
 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
     </svg>
        Sign In With Google
</button>

<p className="text-center text-gray-500 mb-4">Or, Continue With Email</p>

<div className="email--login--area mb-4">
<label htmlFor="userName">Email</label>
    <input 
    type="email" 
    className="w-full text-gray-600 border border-gray-400 px-5 py-2 mb-3 rounded-2xl"
    value={Email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Your Email"/>

<label htmlFor="password">Password</label>
    <input 
    type="password" 
    className="w-full text-gray-600 border border-gray-400 px-5 py-2 mb-4 rounded-2xl"
    value={Password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Your Password"/>

    <button
    onClick={()=> SignInWithEmailAndPassword(Email, Password)}
    className="w-full text-lg font-medium text-white bg-amber-400 px-5 py-2 mb-3 rounded-2xl">
        Sign In
    </button>

    <button
    onClick={() => signUpWithEmailAndPassword(Email, Password)}
    className="w-full text-lg font-medium text-gray-700 bg-transparent px-5 py-2 mb-2 rounded-2xl border-2 border-gray-800">
        Create An Account
    </button>
</div>

    </div>
    </div>
  )
}

export default Home