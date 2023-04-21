import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc } from 'firebase/firestore'
import {db} from '../../services/firebase/FirebaseConfig'
import { useNotification } from '../../notification/NotificationService'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    
    const { itemId } = useParams()
    const { setNotification } = useNotification()

    useEffect(() => {
        

        const productRef = doc(db, 'products', itemId)
        if(productRef==="" || productRef === undefined){
            setLoading(true)
        }
        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                setNotification('error', 'mensaje: ' + error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId, setNotification])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return(
        <div className='w-10/15 h-auto' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer