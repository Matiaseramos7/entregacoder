import './Navbar.css'
import logo from './assets/Logo-Cucu.svg'
import CartWidget from '../CartWidget/CartWidget'
import Login from '../Login/Login'

const Navbar = () => {
   /*  const handleClick = () => {
        console.log('Celulares')
        console.log('otra linea')
    } */

    return (
        <nav className="Navbar">
            <div className='flex flex-column item-center justify-center text-amber-600 w-40'>
                <a href='www.google.com'><img src={logo} className="w-30 h-20" alt='logo'/></a>         
            </div>
            <div className='flex flex-row w-1/5'>
               <ul className='itemBar flex flex-row items-center justify-center text-xl'>
                <li className='active mr-5'>
                    <a href='www.google.com' className='text-amber-600'>Inicio</a>
                </li>
                <li className='mr-5 text-amber-600'>
                    <a href='www.google.com'>Catalogo</a>
                </li>
                <li className='text-amber-600'>
                    <a href='www.google.com'>Servicio</a>
                </li>
               </ul>
            </div>
            <div className='userSection'>
                <CartWidget count={1}/>
                <Login name={'Usuario'}></Login>
            </div>
           
        </nav>
    )
}

export default Navbar