import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'

const Cart = () => {
    const { cart, total, clearCart, incrementQuantity, decrementQuantity, removeItem} = useCart()
    const { setNotification } = useNotification()
   
     const handleOnDelete = () => {
        try {
            clearCart()
        }catch(error){
            setNotification('error', 'mensaje: ' + error)
        }
        
    } 
    
   

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-10">
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="bg-amber-100 text-amber-700 border border-gray-200 mb-2 p-5 flex flex-row rounded w-3/4 h-1/2">
                                <table className="w-full">
                                    <thead>
                                        
                                    </thead>
                                    <tbody>
                                    <td className="text-left h-auto">{prod.name}</td>
                                    <td className="text-right mr-0">{prod.quantity} x ${prod.price}</td>
                                    <td className="text-right"> <button onClick={() => decrementQuantity(prod.id)} className="bg-green-600 text-2xl mr-3 px-2 text-white w-10 h-10 rounded">-</button>
                                    <button onClick={() => incrementQuantity(prod.id, prod.stock)} className="bg-green-600 text-2xl px-2 text-white w-10 h-10 rounded">+</button>
                                    <button onClick={() => removeItem(prod.id)} className="bg-red-600 p-2 text-white rounded text-center m-2">Eliminar</button>
                                    </td>     
                                    </tbody>
                                </table>
                                                            
                            </div>
                        )
                    })
                }
            </div>

            <h1 className="bg-green-200 text-green-700 p-5 mb-10">Total de la compra ${total}</h1>
            <Link to='/checkout' className="bg-red-300 hover:bg-teal-200 text-white p-2 m-6 rounded w-30 h-30">Checkout</Link>
            <button className="bg-gray-300 hover:bg-green-200 text-white p-2 m-5 rounded w-30 h-30" onClick={handleOnDelete} >Limpiar Carrito</button>
        </div>
    )
}

export default Cart