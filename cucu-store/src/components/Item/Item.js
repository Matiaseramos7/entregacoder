import { Link } from 'react-router-dom'
const Item = ({ src, name, description, price, id, marca }) => {

    return (
        <div className="border border-zinc-300 bg-white py-4 px-5 mt-10 ml-20 rounded-lg flex flex-col justify-center items-center"> 
            <img className="w-96 h-96 border border-gray-200" src={src} alt={name}></img>
            <h5 className="text-3xl text-teal-900 py-2">{name}</h5>
            <p className="text-black h-20">{description}</p>
            <p className="text-black h-20">{marca}</p>
            <p className="text-black h-20 text-3xl">$ {price}</p>
            <Link to={`/item/${id}`} className='hover:bg-blue-700 hover:text-white py-4 px-4 border border-orange-600 hover:border-blue-100'>Ver detalle</Link>
        </div>
    )
}

export default Item