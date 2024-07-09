import { Badge } from "react-bootstrap";
import { Button }from "react-bootstrap";

function ProteinItem({ name, category, serving, grams}) {

    return (

       <div>
       <h1> {category} {name} {serving} {grams}g </h1>
       <Badge bg="primary" pill as={Button}>
          add
        </Badge>
       </div>

    )

}
export default ProteinItem;