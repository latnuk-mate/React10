import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Authentication from './Authentication';



function App() {

return(
       <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}/> } />
        <Route path='/auth/user' element={<Authentication/> } />
        </Routes>
   
  </Router> 

  )


}
export default App;


