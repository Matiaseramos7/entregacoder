import cart from './assets/cart.svg'

const CartWidget = ({count}) => {
    return ( 
        <div className='w-10 h-10 mr-6'>
            <img src={cart} alt='cart-wdiget'/>
            <p>{count}</p>
        </div>
    )
}

export default CartWidget