import Badge from "react-bootstrap/Badge";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ProteinItem from './ProteinItem';
import ProteinListForm from "./ProteinListForm";

// import { useBootstrapPrefix } from './ThemeProvider';
// import { Color, Variant } from './types';

function ProteinList ({key, grams,name, serving, proteinList}) {
   
   
    //   function addProtein(newProtein){
    //     fetch('http://localhost:3001/foods',{
    //       method: "POST",
    //       headers:{
    //         "Content-Type":"application/JSON"
    //       },
    //       body: JSON.stringify(newProtein)
    //     })
    //     .then(r=>r.json())
    //     .then(data=>{
         
    //       const newProteinArr = [...proteinList,data]
    //       setProteinList(newProteinArr)
          
    //     })
    
    //   }
    const originalList = proteinList.map((protein) => {

        return <ProteinItem key={protein.id} name={protein.name} serving={protein.serving} grams={protein.grams}/> 
})
    return(

    <Container>
    {/* <ProteinListForm addProtein={addProtein}/> */}
    <ListGroup >
        
      <ListGroup.Item
        as="ul"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {originalList}
          </div>
         
        </div>
        <Badge bg="secondary" as={Button}>
          add
        </Badge>
      </ListGroup.Item>
    
    </ListGroup>
    </Container>
  )
}

export default ProteinList;