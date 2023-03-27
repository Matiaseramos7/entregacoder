import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ id, name, src, description, price, stock }) => {
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <div className='flex flex-row justify-center items-center mb-10 bg-white ml-20 mr-20 w-2/3 border border-blue-900'>
            <div className="border-zinc-300 py-4 px-5 mt-10 rounded-lg flex flex-col justify-center items-center">
                <img className="w-96 h-96 border border-gray-00" src={src} alt={name}></img>
                <h5 className="text-4xl text-teal-900 py-2">{name}</h5>
                <p className="text-black h-15">{description}</p>
                <p className="text-black h-15 text-5xl mb-5 p-2"> $ {price}</p>
            </div>
            <ItemCount onAdd={handleOnAdd} stock={stock} id={id}/>
        </div>
     )
}

export default ItemDetail