import React from "react";
import {Button, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import ProteinPage from "./ProteinPage";
import Calculator from "./Calculator";
import { useState } from "react";
import SelectedProteinList from "./SelectedProteinList";
import Collapse from "react-bootstrap/Collapse";




function Home ({setCalcGrams, calcGrams}) {
    const [isOpen, setIsOpen] = useState(false);
    const [weight, setWeight] = useState(0);
    // const [calcGrams, setCalcGrams] = useState(0)




return (
    <Card className = "background"> 
       
    <div>
    <ProteinPage id = "parent" setCalcGrams = {setCalcGrams} calcGrams = {calcGrams} />
        </div>
    <div>
    <Calculator setCalcGrams = {setCalcGrams} calcGrams = {calcGrams} />
        </div>
       


  <div>
    <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
    {isOpen && (
      <div>
        <p>Option A</p>
        <p>Option B</p>
        <p>Option C</p>
      </div>
    )}
  </div>

 <Image src="https://media.istockphoto.com/id/1296030180/photo/composition-with-high-protein-food.jpg?s=612x612&w=0&k=20&c=DJDYM9qte_Mz04jh-YsjQg6va8ht_PKbMV1yhndRdvs=" fluid />
   
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/calculator">Protein Calculator</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/proteinPage" >Protein Rich Foods </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Why do we need protein?</Card.Title>
        <Card.Text>
        Protein is a vital component of the human body that has many health benefits. It is beneficial for brain function, skin, hair and nails, and body composition.
        </Card.Text>
          <Accordion> 
      <Accordion.Item>
      <Accordion.Header onClick={() => setIsOpen(!isOpen)}>Brain and Neurological Benefits</Accordion.Header>
        {isOpen && (
        <Accordion.Body>
        Proteins in our diet affect brain performance because they provide the amino acids (simply put, protein is made of amino acids) that make up our neurotransmitters. Think of neurotransmitters as biochemical messengers whose job it is to carry signals from one brain cell to another. These brain cells then transmit various signals to the different parts of the body to carry out their individual tasks. The better these messengers are fed, the more efficiently they deliver the goods.
        <br>
        </br>
        <br /><br />

Protein – amino acids – are also essential for our happiness.  When we don’t eat enough good protein, the brain can’t produce enough neurotransmitters such as serotonin, which is one of the main chemicals which regulates our moods. Some doctors practising in natural medicine believe that amino acid therapy is more effective in some cases than the traditional drugs that are used to treat depression. Eating good sources of protein helps to boost our levels of serotonin and dopamine and this is really important as these help to boost energy, mental clarity, and basically make you feel happier as well as regulate pain, reduce anxiety, initiate deep sleep.
        </Accordion.Body> )}
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header onClick={() => setIsOpen(!isOpen)}>Skin, Hair, and Nails</Accordion.Header>
        
        {isOpen && (
        <Accordion.Body>
        Our skin, hair, and nails are affected by what we eat. When we’re eating an unhealthy diet, it affects our collagen, keratin, and elastin, three of the most abundant proteins in our bodies, which in turn affects the health of our skin, hair, and nails.
        <br>
        </br>
        <br /><br />
        Collagen is a big contributor to our skin health — our collagen production drops as we age, which contributes to wrinkles and sagging skin. Collagen production starts with procollagen, a molecule made from vitamin C and protein. These molecules bind together to create fibrils, which accumulate until they become structured collagenous fibres. This is what provides the structural element to our skin, hair, and nails.
        <br>
        </br>
        <br /><br />
        Hair is primarily made up of a protein called keratin, which is also the structural protein found in our nails and skin. When we’re eating too little calories and protein, or eating an unhealthy diet, because our hair, skin, and nail health is not our body’s priority, it will lead to our body prioritising other functions, leading to slow hair growth as well as dry, brittle and weak hair. Prolonged calorie restriction will also lead to hair loss.
        </Accordion.Body> )}
      
      </Accordion.Item> 
      
     
      <Accordion.Item>
        <Accordion.Header onClick={() => setIsOpen(!isOpen)}>Body Composition</Accordion.Header>
        {isOpen && (
        <Accordion.Body>
        Protein makes you burn more calories (increases 'calories out') Due to the high thermic effect and a positive effect on resting energy expenditure and maintaining lean muscle, a high protein intake tends to boost metabolism.
        <br>
        </br>
        <br /><br />
        Protein is the building block of your muscles. Eating adequate amounts of protein helps you maintain your muscle mass and promotes muscle growth when you do strength training. Numerous studies show that eating plenty of protein can help increase muscle mass and strength. If you’re physically active, lifting weights, or trying to gain muscle, you need to make sure you’re getting enough protein. Keeping protein intake high can also help prevent muscle loss during weight loss.
        <br>
        </br>
        <br /><br />
        One of the consequences of aging is that your muscles gradually weaken. The most severe cases are referred to as age-related sarcopenia, which is one of the main causes of frailty, bone fractures, and reduced quality of life among older adults. Eating more protein is one of the best ways to reduce age-related muscle deterioration and prevent sarcopenia. Staying physically active is also crucial, and lifting weights or doing some sort of resistance exercise can work wonders.
        </Accordion.Body> )}
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>

  );


}

export default Home;

// onClick={()=>setOpen(!open)}

// {open ? Accordion.Item  : Accordion.Body}