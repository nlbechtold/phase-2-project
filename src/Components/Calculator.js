import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { CardBody, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavLink from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useCalcContext } from './CalcContext';
import React, { useState } from 'react';


function Calculator() {

    // here is where I am using 3 states for form and calculation

    const { calcGrams, setCalcGrams } = useCalcContext();
    const [weight, setWeight] = useState('');
    const [activity, setActivity] = useState('1');

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    };
// here is where I am creating logic that is dependent on activity level

    const calculateCalcGrams = (event) => {
        event.preventDefault();
        let calcGramsValue = 0;

        switch (activity) {
            case '1':
                calcGramsValue = weight * 0.5;
                break;
            case '2':
                calcGramsValue = weight * 0.7;
                break;
            case '3':
                calcGramsValue = weight * 0.7;
                break;
            default:
                calcGramsValue = 0;
        }
// here is where the setCalGrams is updated and used in the protein picker
        setCalcGrams(calcGramsValue);
    };

    return (
        <div>
            <Card className ="page">
                <CardBody className ="content">
            <h2>Calculate your Protein needs! </h2>
            <form onSubmit={calculateCalcGrams}>
                <label>
                    Enter Weight(lb)
                    <input type="number" value={weight} onChange={handleWeightChange} required />
                </label>
                <br /><br />
                <label>
                    Activity Level
                    <select value={activity} onChange={handleActivityChange} required>
                        <option value="1">Light Activity 1-2 days of exercise per week</option>
                        <option value="2">Moderate Activity 2-3 days of exercise per week</option>
                        <option value="3">High Activity 3-4 days of exercise per week</option>
                    </select>
                </label>
                <br /><br />
                <button type="submit" id="button-calc">Calculate Protein Needs</button>
            </form>
            {calcGrams !== 0 && <h3>You need {calcGrams}g of protein</h3>}
            </CardBody>
            </Card>
        </div>
    );
}

export default Calculator;