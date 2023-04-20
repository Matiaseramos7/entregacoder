import './CartWidget.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </div>
    );
}

export default CartWidget