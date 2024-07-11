import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Calculator() { 

const [weight, setWeight] = useState(''); 
const [activity, setActivity] = useState('1'); 
const [calcGrams, setCalcGrams] = useState(null); 
const handleWeightChange = (event) => { setWeight(event.target.value); };
const handleActivityChange = (event) => { setActivity(event.target.value); }; 
const calculateCalcGrams = (event) => 
    { event.preventDefault(); 
    let calcGramsValue = 0; 
    
    switch (activity) { 
        case '1': calcGramsValue = weight * 0.5; 
        break; 
        case '2': calcGramsValue = weight * 0.7; 
        break; 
        case '3': calcGramsValue = weight * 0.7; 
        break; 
        default: calcGramsValue = 0;
     } 
     setCalcGrams(calcGramsValue); 
    }; 
    
    return ( 
    <Card className ="background-calculator">
    <div> 
    <Card.Body className ="container-calculator">
        <h1>Calculate Your Protein Needs!</h1> 
        <form onSubmit={calculateCalcGrams}> 
        <label> Enter Weight(lb) <input type="number" value={weight} 
        
        onChange={handleWeightChange} required /> 
        
        </label>
         <br /><br /> 
         <label> Activity Level 
            <select value={activity} 
            
            onChange={handleActivityChange} required> 
            <option value="1">Light Activity 1-2 days of exercise per week</option> 
            <option value="2">Moderate Activity 2-3 days of exercise per week</option> 
            <option value="3">Highh Activity 3-4 days of exercise per week</option> 
            </select> 
            </label> 
            <br /><br />
             <button type="submit">Calculate Protein Needs</button> 
             </form> 
             {calcGrams !== null && ( <h2>You need {calcGrams}g of protein</h2> )} 
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             </Card.Body>
             </div> 
             </Card>
             
            ); 
        
        } 
        
        export default Calculator;