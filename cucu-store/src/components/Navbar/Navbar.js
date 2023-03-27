import './Navbar.css';
import logo from './assets/Logo-Cucu.svg';
import CartWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';
import { Link } from 'react-router-dom'
import Search from '../Search/Search';
const Navbar = () => {
    
    return (
       <header>
            <nav className="Navbar mt-0 mb-3 mr-5 ml-5 py-2 px-2">
                <div className='flex flex-column item-center justify-center text-orange-300'>
                <Link to='/'> <img src={logo} className="w-30 h-10" alt='logo'/></Link>
                    <div className='flex flex-row w-1/5'>
                <ul className='flex flex-row items-center justify-center text-xl'>
                    <li className='mr-5'>
                    <Link to='/' className='text-amber-600 text-white'>Inicio</Link>
                    </li>
                    <li className='mr-5 text-orange-300'>
                    <Link to='/catalog'  className="hover:text-white" >Catalogo</Link>
                    </li>
                    <li className='text-orange-300'>
                        <Link to='/about' className="hover:text-white">Empresa</Link>
                    </li>
                </ul>
                </div>         
                </div>
                
                <div className='flex flex-row justify-center items-center py-2 px-4 mr-5'>
                    <Search></Search>
                    <CartWidget/>
                    <Login name={'Usuario'}></Login>
                </div>
            </nav>
        </header>
    )
}

export default Navbar