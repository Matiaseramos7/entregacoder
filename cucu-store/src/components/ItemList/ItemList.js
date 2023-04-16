import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className='grid grid-cols-3 justify-center items-center w-full'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList