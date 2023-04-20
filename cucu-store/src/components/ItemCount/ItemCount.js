import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
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
       <div className='flex flex-col'>          
            <div className='flex flex-row justify-center items-center content-center'>
                <button className="bg-orange-400 text-white mb-2 p-2" onClick={decrement}>-</button>
                <h4 className=' text-black mb-2 p-2'>{quantity}</h4>
                <button className="bg-orange-400 text-white mb-2 p-2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="bg-orange-400 text-white p-2 hover:bg-green-400" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount