import React  from "react";
import { Link ,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Users from "./users/Users";
import Login from "./pages/Login";
import Navbar from './Navbar/Navbar'


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/users' element={<Users/>}></Route>
        <Route path='/index' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </Router> 
    </div>
   
  );
}

export default App;
