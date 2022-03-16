import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

 const NavBar = () => {
  return (
        <header>
            <nav className='main-nav'>
                <ul id='main-menu' className='main-menu'>
                <Link to="/">
                    <h1 className='nav-brand'>SASHA POTTERY</h1>
                </Link>    
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Home</a>
                    </li>
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Productos</a>
                    </li>
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Somos</a>
                    </li>
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Contacto</a>
                    </li>
                    <Link to="/carrito">
                        <CartWidget/>
                    </Link>

                    
                </ul>
            </nav>
        </header>
  )
}

export default NavBar
