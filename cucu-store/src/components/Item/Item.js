import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, src, price }) => {

    
    return (
        <article className="flex flex-col justify-center items-center bg-amber-200 w-2/3 h-auto mb-10 rounded rounded-lg p-5 ">
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
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link to={`/item/${id}`}  className='bg-orange-700 text-white p-2 hover:bg-green-400 m-2 rounded'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item