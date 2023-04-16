import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByMarca } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { marcaId } = useParams()

    useEffect(() => {
        const asyncFunction = marcaId ? getProductsByMarca : getProducts

        asyncFunction(marcaId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [marcaId])

    return (
        <div className='flex flex-col justify-center items-center w-10/12 h-auto ml-20'>
            <h1 className='text-white text-3xl mb-10'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer