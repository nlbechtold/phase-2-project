import ProteinPage from "./ProteinPage";
import Calculator from "./Calculator";
import { useCalcContext } from './CalcContext';

function ProteinPortal () {

    const { calcGrams, setCalcGrams } = useCalcContext();
return(

    <div>
        <h1>Welcome to the Protein Portal: Where all your gainz can come true...</h1>
        <Calculator setCalcGrams = {setCalcGrams} calcGrams = {calcGrams} />
    <ProteinPage id = "parent" setCalcGrams = {setCalcGrams} calcGrams = {calcGrams} />


    </div>
)

}
export default ProteinPortal;