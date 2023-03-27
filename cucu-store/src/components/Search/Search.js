import * as Iconos from 'react-icons/hi2';
import { Link } from 'react-router-dom'
const Search = () => {
    let marca = 'SKMEI'
    return (
        <form className='flex flex-row'>
            <button className='text-blue-200 text-2xl rounded-full bg-blue-700 inset-px'><Link to={`/category/${marca}`}><Iconos.HiOutlineMagnifyingGlassCircle /></Link></button>
            <input className='bg-white rounded-full px-4' type='text' placeholder='Buscar productos'></input>
        </form>

    ) 
}

export default Search