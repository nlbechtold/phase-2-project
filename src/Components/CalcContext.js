import React, { createContext, useState, useContext } from 'react';
const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
    const [calcGrams, setCalcGrams] = useState(0); // Initial state
// below is where I am passing the state above through out the components
    return (
        <CalcContext.Provider value={{ calcGrams, setCalcGrams }}>
            {children} 
        </CalcContext.Provider>
    );
};

export const useCalcContext = () => useContext(CalcContext);