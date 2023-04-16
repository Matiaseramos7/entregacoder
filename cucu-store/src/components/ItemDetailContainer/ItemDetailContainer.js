import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()


    useEffect(() => {
        getProductById(itemId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [itemId])


    return(
        <div className='grid grid-cols-3 justify-center items-center w-10/12 h-auto' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer