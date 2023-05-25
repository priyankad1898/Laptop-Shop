import { Button, Container, Row ,Col} from 'reactstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Menus from './Components/Menus';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Header from './Components/Header';
import Contact from './Components/Contact';
import AllProduct from './Components/AllProduct';

function App() {
  const btnHandle=()=>{
      toast.success("done",{
        position:"top-center",
      });
  };
  return (
    
  
    <div>

        <ToastContainer/>
          <Header/>
                <Container>

                    <div className="row">
                      <div className='mt-4'></div>
                        <div className="col-4 col-md-4"><Menus/></div>
                        <div className="col-8 col-md-8">
                          <Router>
                              <Routes>
                                  <Route path="/" element={<Home />} exact/>
                      
                                  <Route path="/add-product" element={<AddProduct />} exact/> 
                        
                     
                                  <Route path="/view-product"element={<AllProduct/>} exact/>

                                  <Route path="/update-product"element={<UpdateProduct/>} exact/>

                                  <Route path="/contact-us"element={<Contact/>} exact/>

                              </Routes>
                          </Router>
                          
                           
                            
                        </div>
                    </div>
                </Container>

        
                </div>
   
  );
}

export default App;
