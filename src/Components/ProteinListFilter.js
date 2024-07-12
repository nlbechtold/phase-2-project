
import React from "react";




function ProteinListFilter({proteinList, setCategoryO}) {

    const uniqueCategory = [];
    proteinList.map(fil => {
        if (uniqueCategory.indexOf(fil.category) === -1) {
            uniqueCategory.push(fil.category)
        }
    });
    uniqueCategory.push("All")
    const categoryList = uniqueCategory.map((cat) => {
        return <button id="button-calc" onClick = {() => {setCategoryO(cat)}}>{cat}</button>
    });
    return(
<div>

{categoryList}

</div>


    )

}
export default ProteinListFilter;