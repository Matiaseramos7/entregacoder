import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { marcaId } = useParams()

    useEffect(() => {
        const asyncFunction = marcaId ? getProductsByCategory : getProducts

        asyncFunction(marcaId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [marcaId])

    
    return (
        <div className='flex flex-col justify-center items-center mr-5'>
             <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer