
import React from "react";
import { Button } from "react-bootstrap";



function ProteinListFilter({proteinList,categoryO, setCategoryO}) {

    const uniqueCategory = [];
    proteinList.map(fil => {
        if (uniqueCategory.indexOf(fil.category) === -1) {
            uniqueCategory.push(fil.category)
        }
    });
    uniqueCategory.push("All")
    const categoryList = uniqueCategory.map((cat) => {
        return <button onClick = {() => {setCategoryO(cat)}}>{cat}</button>
    });
    return(
<div>

{categoryList}

</div>


    )

}
export default ProteinListFilter;

