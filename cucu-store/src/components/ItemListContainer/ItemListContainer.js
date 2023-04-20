import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import { getProducts, getProductsByMarca } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/FirebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productsRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsRef).then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
            })
            .catch(error => {
                return (
                    <div>
                        <span className='text-red-400'>{error}</span>
                    </div>
                )
            })
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])

    if(loading) {
        return (
            <div>
                <h1 className='text-amber-300'>Cargando...</h1>
            </div>
        )
    }

    return (
        
        <div className='flex flex-col justify-center items-center w-10/12 h-auto ml-20'>
            <h1 className='text-white text-3xl mb-10'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer