import { Badge } from "react-bootstrap";
import { Button }from "react-bootstrap";

function ProteinItem({ onClickAdd, name, category, serving, grams}) {
  

    return (

       <div>
       <h3> {category} {name} {serving} {grams}g </h3>
       <Badge bg="primary" category ={category} name={name} serving={serving} grams={grams} pill as={Button} onClick={(e) => {onClickAdd(e)}}>
          add
        </Badge>
       </div>

    )

}
export default ProteinItem;