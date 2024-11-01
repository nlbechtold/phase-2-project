
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ProteinItem from './ProteinItem';

function ProteinList ({proteinList, onClickAdd, category, filList, setProteinList}) {
   
   
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
    
    const originalList = filList.map((protein) => 
                                                {

        return  <ProteinItem onClickAdd={onClickAdd} categoryO={category} key={protein.id} name={protein.name} category={protein.category} serving={protein.serving} grams={protein.grams}/> 
})
    return(

    <Container>
  

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
       
      </ListGroup.Item>
    
    </ListGroup>
    </Container>
  )
}

export default ProteinList;