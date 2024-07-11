import React from "react";
import { Button }from "react-bootstrap";


function SelectedProteinItem ({addingSelectedProtein, SelectedProteinItem, name, category, serving, grams}) {

return (
  

<div>
    <h1>
 {category} {name} {serving} {grams}g
</h1>

</div>


)



}

export default SelectedProteinItem;