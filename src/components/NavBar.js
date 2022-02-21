import React from 'react'

 const NavBar = () => {
  return (
    <header>
        <nav className='main-nav'>
            <ul id='main-menu' className='main-menu'>
                <h1 className='nav-brand'>SASHA POTTERY</h1>
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
            </ul>
        </nav>
    </header>
  )
}

export default NavBar
