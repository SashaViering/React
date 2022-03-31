import React from 'react'
import CartWidget from './CartWidget'
import { contexto } from '../contexto/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

 const NavBar = () => {
  
    const {quantity} = useContext(contexto)

  return (
      <>
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
                    <Link to="/cart" >
                        <CartWidget/>
                    </Link>
                </ul>
            </nav>
            <h3 className='titulos'>Productos</h3>
        </header>
        <section>
            <nav className='nav ml-4 '>
                <Link className="nav-link liNav active" to="/category/electronics">Macetas</Link>
                <Link className="nav-link liNav" to="/category/jewelery">Tazas</Link>
                <Link className="nav-link liNav" to="/category/men's clothing">Cuencos</Link>
                <Link className="nav-link liNav" to="/category/women's clothing">Floreros</Link>
            </nav> 
        </section>
    </>
  )
}

export default NavBar
