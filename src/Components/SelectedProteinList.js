
import React from "react"
import SelectedProteinItem from "./SelectedProteinItem"
import { Container } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
function SelectedProteinList ({selectedProteinList}) {

  
    // function addSelectedProtein(newProtein){
    //     console.log(newProtein)
    //     addSelectedProtein(selectedProteinItem)
    //       const selectedProteinArr = [...selectedProteinList,newProtein]
    //       setSelectedProteinList(selectedProteinArr)
          
    //     }
    
      
    const selectedOriginalList = selectedProteinList.map((protein) => {

        return <SelectedProteinItem key={protein.id} name={protein.name} category={protein.category} serving={protein.serving} grams={protein.grams}/> 
})

console.log(selectedProteinList) 
// const total = selectedProteinList.reduce((accumulator, currentValue) => accumulator.grams + currentValue, 0)
const total = selectedProteinList.reduce((total, protein) => total = (total + (protein.grams)),0);
// // const sum = selectedOriginalList.reduce(function(prev, current) {
//     return prev + +current.grams
//   }, 0);


    return(

    <Container>


<h1>Selected Protein List</h1>
<h2>(are you getting enough protein?)</h2>
    {/* <ProteinListForm addProtein={addProtein}/> */}
    <ListGroup >
        
      <ListGroup.Item
        as="ul"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {selectedOriginalList} 
          </div>
         <h3>
           Total grams of Protein = {total}
          
         </h3>
        </div>
       
      </ListGroup.Item>
    
    </ListGroup>
    </Container>
  )
}

export default SelectedProteinList;


