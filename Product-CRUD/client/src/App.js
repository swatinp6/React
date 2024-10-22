import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Products/Home'
import Products from './Products/Products'
import Admin from './Products/Admin'
import CreateProduct from './Products/CreateProduct'
import UpdateProduct from './Products/UpdateProduct'
const App = () => {
  return <>
            <Router>
                <Navbar/>
            <Routes>
                <Route path="/index" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/createProduct" element={<CreateProduct/>}/>
                <Route path="/updateProduct/:id" element={<UpdateProduct/>}/>
            </Routes>
           </Router> 
        </>
}

export default App