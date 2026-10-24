import {useCompare} from '../context/CompareContext'
import {Link} from 'react-router-dom'

function Compare(){
    const {compareList} = useCompare()

    if(compareList.length === 0){
        return(
        <div className ="p-8">
            <p className="mb-2">Nothing to compare yet.</p>
            <Link to="/shop" className="underline">Go to Shop</Link>
            </div>
            )
        }
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Compare</h1>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className ="border p-2"></th>
                        {compareList.map(p => (
                            <th key ={p.productId} className="border p-2">{p.productName}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2 font-semibold"> Category </td>
                                {compareList.map (p => (
                                    <td key ={p.productId} className="border p-2">{p.category.categoryName}</td>
                                    ))}
                                </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Price</td>
                                {compareList.map(p => (
                                    <td key={p.productId} className="border p-2">₹{p.price}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">In stock</td>
                                    {compareList.map(p => (
                                        <td key={p.productId} className="border p-2">{p.quantity}</td>
                                       ))}
                                   </tr>
                                </tbody>
                                </table>
                                </div>
                                )
                            }
                        export default Compare