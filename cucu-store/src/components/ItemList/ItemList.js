import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
   
    return(
        <div className='w-4/5 h-auto grid grid-cols-3'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList