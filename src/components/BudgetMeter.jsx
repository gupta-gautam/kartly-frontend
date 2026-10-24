import {useCart} from '../context/CartContext'

function BudgetMeter () {
    const{budget,setBudget,total} = useCart()
    const remaining = budget - total

return(
    <div className="mb-4">
    <input type= "number"  placeholder ="Set your budget (₹)" value ={budget || ''}
     onChange = {(e) =>  setBudget(Number(e.target.value))}/>
    {budget > 0 && (
        <div >
        <div className = "w-full h-3 bg-gray-200 rounded">
        <div
             style ={{width: Math.min(total / budget * 100,100) + '%'}}
            className = {total > budget ? 'h-full bg-red-500' : 'h-full bg-green-500'}
            />
            </div>
            <div className = {remaining < 0 ? 'text-red-500' : ''}>
            {remaining < 0 ? 'Over budget by ₹' + (-remaining) : 'Remaining: ₹' + remaining} </div>
            </div>
        )}
    </div>
    )
}
export default BudgetMeter
