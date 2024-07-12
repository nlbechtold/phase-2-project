import React from "react";
import { Button }from "react-bootstrap";
import Badge from "react-bootstrap/Badge";


function SelectedProteinItem ({onRemove, name, category, serving, grams}) {

return (
  

<div>
    <h3>
 {category} {name} {serving} {grams}g
</h3>
<Badge bg="primary" category ={category} name={name} serving={serving} grams={grams} pill as={Button} onClick={(e) => {onRemove(category, name, serving, grams)}}>
          remove
        </Badge>
</div>


)



}

export default SelectedProteinItem;