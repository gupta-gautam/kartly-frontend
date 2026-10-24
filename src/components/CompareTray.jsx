import {useCompare} from '../context/CompareContext'
import{Link,useLocation} from 'react-router-dom'


function CompareTray(){
    const { compareList , clearCompare} = useCompare()
    const location = useLocation()
    if(compareList.length === 0 || location.pathname === '/compare') return null
    return(
        <div className ="fixed bottom-0 left-0 w-full bg-white border-t p-3 flex justify-between">
            <div>
                <span className="mr-3 font-semibold">
                    Compare ({compareList.length}/3)</span>
            {compareList.map(p => <span key ={p.productId}
                className="mr-3">{p.productName}</span> )}
        </div>
        <div className="flex gap-2">
            <button onClick ={clearCompare}>Clear</button>
            <Link  to ="/compare"> Compare now </Link>
            </div>
            </div>
        )
    }
export  default CompareTray