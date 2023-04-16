import './ItemDetail.css'
// import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
// import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, src, category, description, price,  marca }) => {
    
    const { isInCart } = useCart()

    /* addItem, 
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
    } */

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={src} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Marca: {marca}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                
                  {/*  isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) */}

                    {isInCart(id) && <p>El item con id: {id} esta en el carrito</p>}
            </footer>
        </article>
    )
}

export default ItemDetail