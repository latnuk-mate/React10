import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Authentication from './Authentication';
import React,{ useContext, useRef, useState } from 'react';
import { NoteProvider } from './NoteContext';



function App() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState("");


  const animateBorder = useRef("");
  let width = 100;

  const {flash, setFlash} = useContext(NoteProvider);


  function borderAnimation(){
    const interval = setInterval(function(){
        if(width > 0){
            width = width - 1;
            animateBorder.current.style.width = `${width}%`;
        }else{
            clearInterval(interval)
            setFlash(false)  
        }
    }, 70);
}


if(flash){
    borderAnimation();
}


return(
       <Router>
        <Routes>
        <Route path='/'
        element={
        <Home 
        animateBorder={animateBorder}
        text={text}
        setText={setText}
        setBgColor={setBgColor}
        bgColor={bgColor}
        textColor={textColor}
        setTextColor={setTextColor}
        />
        
         }/>
        <Route path="/dashboard" 
        element={
        <PrivateRoute 
        element={
        <Dashboard
        animateBorder={animateBorder}
        flashText={text}
        setFlashText={setText}
        setBgColor={setBgColor}
        bgColor={bgColor}
        textColor={textColor}
        setTextColor={setTextColor}  
        />}/>
         } />
        <Route path='/auth/user' element={<Authentication/> } />
        </Routes>
   
  </Router> 

  )


}
export default React.memo(App);


