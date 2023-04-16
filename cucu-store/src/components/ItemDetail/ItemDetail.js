import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, src, category, description, price,  marca,stock }) => {
    
 const { addItem, isInCart } = useCart()

   
      
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
    } 

    return (
        <article className="flex flex-col justify-center items-center bg-orange-100 text-amber-700 p-2 rounded-lg">
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
               { 
                   isInCart(id) ? (
                        <Link to='/cart' className='bg-orange-400 p-2 m-2 text-white hover:bg-green-400 rounded'>Terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
                   
            </footer>
        </article>
    )
}

export default ItemDetail