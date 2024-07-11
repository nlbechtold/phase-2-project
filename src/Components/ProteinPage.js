
import ProteinListForm from "./ProteinListForm";
import ProteinListFilter from "./ProteinListFilter";
import ProteinList from "./ProteinList";
import SelectedProteinList from "./SelectedProteinList";
import { useState, useEffect } from "react";
import React from "react";


function ProteinPage({setCalcGrams, calcGrams}) {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedProteinItem, setSelectedProteinItem] = useState ("")
   const [selectedProteinList, setSelectedProteinList] = useState ([]);
    const [proteinList, setProteinList] = useState([]);
    // const [cat, setCat] = useState("");
    const [categoryO, setCategoryO] = useState("All");

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
   
 

      const newListFil = proteinList.filter((protein) => {
        if (categoryO === protein.category || categoryO === "All") {
       return true 
        }
        else {
         return false
        }
       
       });

   
    return(

        <div id ="parent">
       <div id = "list1">
        <h1>Protein Manager</h1>
        <ProteinListFilter filList={newListFil} setCategoryO= {setCategoryO}categoryO={categoryO} proteinList={proteinList}/>
        {/* <ProteinListFilter newListFil = {newListFil} fil ={setCat} cat={protein.category} setCat={setCat} category={proteinList.category} categoryO={categoryO} setCategoryO={setCategoryO} setProteinList= {setProteinList} proteinList={proteinList}/> */}
        <ProteinListForm addProtein={addProtein} category={proteinList.category} categoryO={categoryO} setCategoryO={setCategoryO} />
        <ProteinList filList = {newListFil}  onClickAdd={addingSelectedProtein} categoryO={categoryO} foods={proteinList} proteinList={proteinList} category={proteinList.category} food={proteinList.name} serving={proteinList.serving} grams={proteinList.grams} />
        </div>
        <div id = "list2" >
        <SelectedProteinList setCalcGrams = {setCalcGrams} calcGrams= {calcGrams} category={selectedProteinList.category} food={selectedProteinList.name} serving={selectedProteinList.serving} grams={selectedProteinList.grams} addingSelectedProtein={addingSelectedProtein} selectedProteinItem={selectedProteinItem} setSelectedProteinList={setSelectedProteinList} selectedProteinList={selectedProteinList}/>
    
        </div>

      </div>
    );
  

    
}

export default ProteinPage;
