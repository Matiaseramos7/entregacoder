import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logo from './assets/Logo-Cucu.svg'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link to='/' className='text-white'><img src={logo} className='w-32 h-32' alt='logo'/></Link>
        <div className="Categories">
          <NavLink to='/category/SKEI' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><p className='text-white hover:text-amber-300 mr-10'>SKEI</p></NavLink>
          <NavLink to='/category/Tommy Hilfiger' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><p className='text-white hover:text-amber-300 mr-10'>Tommy Hilfiger</p></NavLink>
          <NavLink to='/category/New Gent' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><p className='text-white hover:text-amber-300'>New Gent</p></NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar