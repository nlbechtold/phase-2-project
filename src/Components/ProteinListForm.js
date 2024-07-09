import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";




function ProteinListForm({addProtein}) {
    
    return (
        <div className = "ProteinListForm">
            <h1>Enter Food</h1>
        <Form
        onSubmit={(e) => {
            e.preventDefault();
         
            const newProtein = {
        
            name: e.target.name.value,
            serving: e.target.serving.value,
            grams: e.target.grams.value,
            category: e.target.category.value
            }
            console.log(newProtein)
            addProtein(newProtein)
        }}>
           <InputGroup className="mb-3">
             <Form.Select aria-label="Default select example">

            <option value="">--Please choose an option--</option>
            <option value ="category"name="category" >Meat</option>
            <option value ="category"  name="category" >Dairy</option>
            <option value ="category" name="category" >Plant</option>
      
          </Form.Select>
          
          
          <InputGroup.Text>name</InputGroup.Text>
            <Form.Control label="name" placeholder= "name"  name= "name" />
            <InputGroup.Text>serving size</InputGroup.Text>
            <Form.Control label="serving size" placeholder= "serving size"  name= "serving" />
            <InputGroup.Text>grams</InputGroup.Text>
            <Form.Control label="grams" placeholder= "grams" name= "grams" /> 
             
            <Button type="submit">Submit form</Button>
           
            </InputGroup>

        </Form>
        </div>
        
    )

}
           
      
    
export default ProteinListForm;