
import ProteinListForm from "./ProteinListForm";
import ProteinListFilter from "./ProteinListFilter";
import ProteinList from "./ProteinList";
import SelectedProteinList from "./SelectedProteinList";
import { useState, useEffect } from "react";
import React from 'react';
import { useCalcContext } from './CalcContext';
import { Image } from "react-bootstrap";
import {Card} from "react-bootstrap";




function ProteinPage() {

    const { calcGrams, setCalcGrams } = useCalcContext();

  const [selectedProteinItem, setSelectedProteinItem] = useState ("")
   const [selectedProteinList, setSelectedProteinList] = useState ([]);
    const [proteinList, setProteinList] = useState([]);
 
    const [categoryO, setCategoryO] = useState("All");
// here is where I am manipulating and adding to the proteinList state
    useEffect(()=>{
        fetch('http://localhost:3001/foods')
        .then(r=>r.json())
        .then(data=>setProteinList(data))
  
      },[])
      function addProtein(newProtein){
        console.log(newProtein)
        fetch('http://localhost:3001/foods',{
          method: "POST",
          headers:{
            "Content-Type":"application/JSON"
          },
          body: JSON.stringify(newProtein)
        })
        .then(r=>r.json())
        .then(data=>{
           
          const newProteinArr = [...proteinList,data]
          setProteinList(newProteinArr)
          

          
        })
      
      
    
      }
        //    here is where I am using a function to push the new protein to the db.json
    function addingSelectedProtein(e) {
   
       
     
        const selectedProteinItem = {
    
        name: e.target.getAttribute('name'),
        serving: e.target.getAttribute('serving'),
        grams: parseInt(e.target.getAttribute('grams')),
        category: e.target.getAttribute('category')
        }

        const selectedProteinArr = [...selectedProteinList,selectedProteinItem]
        setSelectedProteinList(selectedProteinArr)
    

    }
   
//  here is the logic for the filter buttons of state of proteinlist

      const newListFil = proteinList.filter((protein) => {
        if (categoryO === protein.category || categoryO === "All") {
       return true 
        }
        else {
         return false
        }
       
       });

   
    return(
        <><div>
            <Image src="https://media.istockphoto.com/id/1296030180/photo/composition-with-high-protein-food.jpg?s=612x612&w=0&k=20&c=DJDYM9qte_Mz04jh-YsjQg6va8ht_PKbMV1yhndRdvs=" fluid />
        </div> <Card id="parent">
                    <Card>
                <div id="list1">
                <br></br>
                    <h1> Protein Rich Foods </h1>
                    <br></br>
            {/* here are the components that make up the protein page and their props */}

                    <ProteinListFilter filList={newListFil} setCategoryO={setCategoryO} categoryO={categoryO} proteinList={proteinList}></ProteinListFilter>
                    <br></br>
                    <ProteinListForm addProtein={addProtein} category={proteinList.category} categoryO={categoryO} setCategoryO={setCategoryO} />
                    <ProteinList filList={newListFil} onClickAdd={addingSelectedProtein} categoryO={categoryO} foods={proteinList} proteinList={proteinList} category={proteinList.category} food={proteinList.name} serving={proteinList.serving} grams={proteinList.grams} />
                </div>
                </Card>
           
            <></>
            <Card>
            <div id="list2">
            <br></br>
            <h1>Protein Picker</h1>
           
                <SelectedProteinList setCalcGrams={setCalcGrams} calcGrams={calcGrams} category={selectedProteinList.category} food={selectedProteinList.name} serving={selectedProteinList.serving} grams={selectedProteinList.grams} addingSelectedProtein={addingSelectedProtein} setSelectedProteinItem={setSelectedProteinItem} selectedProteinItem={selectedProteinItem} setSelectedProteinList={setSelectedProteinList} selectedProteinList={selectedProteinList} />
                </div> </Card> </Card>
        
   
      </> 
    );
  

    
}

export default ProteinPage;