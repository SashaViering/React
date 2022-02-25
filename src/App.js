import React from 'react'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from './components/ItemListContainer'



const App = () => {
    const persona = {
        nombre: "Sasha",
        edad: "24"
    }
    return( 
    <>
        <NavBar/>
        <ItemListContainer categorías={["Tazas", "Macetas", "Floreros", "Cuencos"]}/>
        <Footer/>
    </>
    )
}


export default App