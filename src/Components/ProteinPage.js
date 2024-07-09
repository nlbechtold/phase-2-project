
import ProteinListForm from "./ProteinListForm";
import ProteinListFilter from "./ProteinListFilter";
import ProteinList from "./ProteinList";
import SelectedProteinList from "./SelectedProteinList";
import SelectedProteinListCalculator from "./SelectedProteinListCalculator";
import { useState, useEffect } from "react";

function ProteinPage() {
    const [proteinList, setProteinList] = useState([]);
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

    // const [cat, setCat] = useState("All");
    // const newListFil = filList.filter((foods) => {
    //     if (cat === foods.category || cat === "All") {
    //    return true 
    //     }
    //     else {
    //      return false
    //     }
       
    //    });
    //    console.log(newListFil)

    return(
        <div>
        <h2>Protein List</h2>
        <ProteinListFilter  setProteinList= {setProteinList} proteinList={proteinList}/>
        <ProteinListForm addProtein={addProtein}/>
        <ProteinList foods={proteinList} proteinList={proteinList} category={proteinList.category} food={proteinList.name} serving={proteinList.serving} grams={proteinList.grams} />
        <SelectedProteinList />
        <SelectedProteinListCalculator />
        
      </div>
    );
  

    
}

export default ProteinPage;