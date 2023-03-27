import * as Iconos from 'react-icons/fi';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    
    return ( 
        <button className='hover:text-orange-300 w-30 h-30 mr-6 text-white flex flex-row justify-center items-center py-5 px-2'>
            <Link to={`/cart/${1}`} className="text-4xl" ><Iconos.FiShoppingCart /></Link>
            <p className="ml-2 mr-3 text-base">{0}</p>
        </button>
    )
}

export default CartWidget