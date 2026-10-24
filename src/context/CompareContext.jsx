import {createContext,useContext,useState} from 'react'
const CompareContext = createContext()

export function CompareProvider({children}){
const[compareList , setCompareList] = useState([])

function toggleCompare(product){
    const existing = compareList.find(p => p.productId === product.productId)
    if(existing){
        setCompareList(compareList.filter(p => p.productId !== product.productId))
        }
    else if(compareList.length >= 3){
            return
            }else{
                setCompareList([...compareList,product])
                }
    }
function clearCompare(){
   setCompareList([])
    }
return(
    <CompareContext.Provider value = {{compareList,toggleCompare,clearCompare}}>
        {children}
    </CompareContext.Provider>
    )
}
export function useCompare(){
    return useContext(CompareContext)
    }