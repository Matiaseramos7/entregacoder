import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo-Cucu.svg'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/FirebaseConfig'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))

    getDocs(categoriesRef)
      .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
        })
        setCategories(categoriesAdapted)
      })
  }, [])

  return (
    <nav className="flex flex-row bg-transparent items-center justify-around h-14 " >
        <Link to='/' className='text-white'><img src={logo} className='w-32 h-32' alt='CucuStore'/></Link>
        <div className='flex flex-row justify-center items-center'>
        {
            categories.map(cat => {
              return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'text-green-700 mr-10 hover:text-green-600' : 'text-white mr-10 hover:text-amber-300'}>{cat.label}</NavLink>
            })
        }
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar