
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
      console.log(proteinList)

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
        <ProteinListForm />
        <ProteinList foods={proteinList} proteinList={proteinList} food={proteinList.name} serving={proteinList.serving} grams={proteinList.grams} />
        <SelectedProteinList />
        <SelectedProteinListCalculator />
        
      </div>
    );
  

    
}

export default ProteinPage;