import './App.css'
import {useState } from 'react'

import Home from './Home'
import Dashboard from './Dashboard'


function App() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false)


  if(!ready){
    return <Home setUser={setUser} setReady={setReady}/>
  }else{
    return <Dashboard user={user}  setReady={setReady}/>
  }

}

export default App;
