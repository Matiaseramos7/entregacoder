import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock = 0, initial = 1, id})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   

   return(
       <div className='flex flex-col justify-center items-center'>          
            <div className='flex flex-row'>
                <button className="hover:bg-blue-600 bg-orange-600 text-white w-10 h-10 py-2 px-3 mt-0.5 mr-3" onClick={decrement}>-</button>
                <h4 className='text-2x1 mr-5 ml-4 '>{quantity}</h4>
                <button className="hover:bg-blue-600 bg-orange-600 text-white w-10 h-10 py-2 px-3 mt-0.5 mr-3" onClick={increment}>+</button>
            </div>
            <div>
                <Link to='/' className="border border-orange-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white bg-white text-orange-600 py-2 px-3 mt-0.5 mr-2">Agregar al carrito</Link>
            </div>
       </div>
   )

}
export default ItemCount