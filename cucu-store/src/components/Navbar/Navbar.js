import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo-Cucu.svg'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex flex-row bg-transparent items-center justify-around h-14 " >
        <Link to='/' className='text-white'><img src={logo} className='w-32 h-32' alt='logo'/></Link>
        <div className='flex flex-row justify-center items-center'>
          <NavLink to='/marca/SKMEI' className={({ isActive }) => isActive ? 'border-b-2' : ''}><p className='text-white hover:text-amber-300 mr-10'>SKMEI</p></NavLink>
          <NavLink to='/marca/Tommy Hilfiger' className={({ isActive }) => isActive ? 'border-b-2' : ''}><p className='text-white hover:text-amber-300 mr-10'>Tommy Hilfiger</p></NavLink>
          <NavLink to='/marca/New Gent' className={({ isActive }) => isActive ? 'border-b-2' : ''}><p className='text-white hover:text-amber-300'>New Gent</p></NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar