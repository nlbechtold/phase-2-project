import React from "react";
// import {Link, useNavigate} from 'react-router-dom'
import Home from './Home'


import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProteinPage from "./ProteinPage";
import Calculator from "./Calculator";


function App() {
// -----
//   const navigate = useNavigate();

//   const navigateToHome = () => {
//     // use the navigate function to navigate to /new-page
//     navigate("/home");
//   };

//   return (
//     <button onClick={() => navigateToHome()}>
//       Navigate Home
//     </button>
//   );
// };
// -------
    // const navigate = useNavigate()
    //   return(
    //         <button onCLick={()=>navigat(/home)}> Home </button> 
    //       )
            
    // const navigateToCalculator = useNavigate()
    //     return (
    //     <Button onCLick={()=>navigateToCalculator(“/calculator”)}> Calculator </Button> 
    //   )
    
    
    // const navigateToProteinList =useNavigate=()
    // return(
            
          //   <Button onCLick={()=>navigate(“/proteinList”)}> ProteinList </Button> 
          // )

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
