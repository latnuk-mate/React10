import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'
import { auth } from '../firebase';
import EmailVerification from './EmailVerification';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';



function App() {

return(
       <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}/> } />
        <Route path='/verifyMail' element={<EmailVerification auth={auth}/> } />
        </Routes>
   
  </Router> 

  )


}
export default App;


