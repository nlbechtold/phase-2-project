import React from "react";
// import {Link, useNavigate} from 'react-router-dom'
import Home from './Home'


import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProteinPage from "./ProteinPage";
import Calculator from "./Calculator";


function App() {


      return(
    
        <BrowserRouter> 
            <Routes> 
            <Route path="/" 
            element={ <Home/>}/>
                <Route path="/home" 
                    element={<Home />} /> 
                <Route path="/calculator"
                    element={<Calculator />} /> 
                <Route path="/proteinPage"
                    element={<ProteinPage />} /> 
            </Routes> 
        </BrowserRouter> 
        

      )
}



export default App;
