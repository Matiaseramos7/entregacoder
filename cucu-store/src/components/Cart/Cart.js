import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'

const Cart = () => {
    const { cart, total, clearCart } = useCart()
//    const { setNotification } = useNotification()
   

   /*  const handleOnDelete = () => {
        
        clearCart()
        setNotification('error', 'Elimino del carrito el producto')
    }  */

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-10">
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="bg-amber-100 text-amber-700 border border-gray-200 mb-2 p-5 flex flex-row rounded w-3/4 h-1/2">
                                <table className="w-full">
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                    <td className="text-left h-auto">{prod.name}</td>
                                    <td className="text-right mr-0">{prod.quantity} x ${prod.price}</td>
                                    <td className="text-right"><button className="bg-red-500 text-white p-2 rounded">Eliminar</button></td>     
                                    </tr>
                                </table>
                                                            
                            </div>
                        )
                    })
                }
            </div>

            <h1 className="bg-green-200 text-green-700 p-5 mb-10">Total de la compra ${total}</h1>
            <Link to='/checkout' className="bg-red-300 hover:bg-teal-200 text-white p-2 m-6 rounded w-30 h-30">Checkout</Link>
            {/* <button className="bg-gray-300 hover:bg-green-200 text-white p-2 m-5 rounded w-30 h-30" onClick={handleOnDelete()} >Limpiar Carrito</button> */}
        </div>
    )
}

export default Cart