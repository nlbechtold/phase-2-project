import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProteinPortal from "./ProteinPortal";

import { CalcProvider } from './CalcContext';
import Calculator from './Calculator';
import ProteinPage from './ProteinPage';

function App({calcGrams, setCalcGrams}) {

// here are my 3 routes
    return (
      <Router>
      <CalcProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/proteinPortal" element={<ProteinPortal />} />
            
          </Routes>
      </CalcProvider>
  </Router>
    );
}

export default App;