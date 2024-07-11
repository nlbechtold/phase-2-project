import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import ProteinList from "./ProteinList";




function ProteinListForm({addProtein,category,setCategoryO,categoryO}) {

    

    function handleChange(e){
        console.log(e.target.value)
       
        setCategoryO(e.target.value)
       
    }
    
    return (
        <div className = "ProteinListForm">
            <h2>Protein Rich Foods</h2>
        <Form
        onSubmit={(e) => {
            e.preventDefault();
         
            const newProtein = {
        
            name: e.target.name.value,
            serving: e.target.serving.value,
            grams: e.target.grams.value,
            category: categoryO
            }
            console.log(newProtein)
            addProtein(newProtein)
        

        }}>
           <InputGroup className="mb-3">
             <Form.Select aria-label="Default select example" onChange= {handleChange}>

            <option value="">--Please choose an option--</option>
            <option value ="Meat"name="category" >Meat</option>
            <option value ="Dairy"  name="category" >Dairy</option>
            <option value ="Plant" name="category" >Plant</option>
      
          </Form.Select>
          
          
          <InputGroup.Text>name  </InputGroup.Text>
            <Form.Control label="name" placeholder= "name"  name= "name" />
            <InputGroup.Text>serving size  </InputGroup.Text>
            <Form.Control label="serving size" placeholder= "serving size"  name= "serving" />
            <InputGroup.Text>grams  </InputGroup.Text>
            <Form.Control label="grams" placeholder= "grams" name= "grams" /> 
            <br>
            </br>
            <br>
            </br>
             <div>
            <Button type="submit">Add Protein Item</Button>
            </div>
           
            </InputGroup>

        </Form>
        </div>
        
    )

}
           
      
    
export default ProteinListForm;