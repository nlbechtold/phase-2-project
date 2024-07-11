
import React from "react";
import { Button } from "react-bootstrap";
// import ProteinList from "./ProteinList";


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





    // console.log(cat)


//    console.log(proteinList)
// const buttonList = proteinList.map((cat) => (
//     <button key={categoryO} className="btn"> {categoryO}</button>
// ));
// return (
//   <div className="categories">
//     <h5>Category Filter</h5>
//     {buttonList}
// </div>
//   );
}
export default ProteinListFilter;

{/* <button key={index} className="btn" onClick={() => {fil(cat)}}>{cat}</button> */}