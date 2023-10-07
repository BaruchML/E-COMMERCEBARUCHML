import React from 'react'
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget'


export const NavBar = () => {
  return (
    <header>
        <h1>Tienda Ropa</h1>
        <nav>
            <ul>
                <li>Playeras</li>
                <li>Pantalones</li>
                <li>Temporada</li>
            </ul>
        </nav>
        <CarWidget/>
    </header>
  )
}


export default NavBar