import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";


function ProteinListForm({addProtein, newProtein}) {
    
    return (
        <div>
        <Form
        onSubmit={(e) => {
            // console.log(e.target.fronturl)
            const newProtein = {
            food: e.target.food.value,
            serving: e.target.serving.value,
            grams: e.target.grams.value
            }
            addProtein(newProtein)
        }}>
        
            <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">All</option>
            <option value="2">Meat</option>
            <option value="3">Dairy</option>
            <option value="3">Plant</option>
      
          </Form.Select>
            <InputGroup.Text>food item</InputGroup.Text>
            <Form.Control aria-label="food item" placeholder= "food item" name="food"/>
            <InputGroup.Text>serving Size</InputGroup.Text>
            <Form.Control aria-label="serving size" placeholder= "serving size"  name= "serving" />
            <InputGroup.Text>grams</InputGroup.Text>
            <Form.Control aria-label="grams" placeholder= "grams" name= "grams" /> 
             <div>
            <Button as="input" type="reset" value="Submit" />
            </div>

        </Form>
        </div>
        
    )

}
export default ProteinListForm;