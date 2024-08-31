import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteContext from './NoteContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <NoteContext>
       <App />  
    </NoteContext>
   

)
