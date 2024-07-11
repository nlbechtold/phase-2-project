import React from "react";
import Home from './Home'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProteinPage from "./ProteinPage";
import Calculator from "./Calculator";
import {useState} from "react"


function App() {
  const [calcGrams, setCalcGrams] = useState(0)
      return(
    
        <BrowserRouter> 
            <Routes> 
            <Route path="/" 
            element={ <Home/>}/>
                <Route path="/home" 
                    element={<Home setCalcGrams={setCalcGrams} calcGrams={calcGrams}/>} /> 
                <Route path="/calculator"
                    element={<Calculator setCalcGrams={setCalcGrams} calcGrams={calcGrams} />} /> 
                <Route path="/proteinPage"
                    element={<ProteinPage setCalcGrams={setCalcGrams} calcGrams={calcGrams}/>} /> 
            </Routes> 
        </BrowserRouter> 
        

      )
}



export default App;
