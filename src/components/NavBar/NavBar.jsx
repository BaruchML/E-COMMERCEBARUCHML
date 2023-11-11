import { Link, NavLink } from 'react-router-dom';
import CarWidget from "../CarWidget/CarWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="LogoNintendo" src={"../img/logo.png"} alt="Logo Nintendo" />
      </Link>
      
      
      <nav>
        <ul>
        <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="categoria/1">Heroes</NavLink>
          </li>
          <li>
            <NavLink to="categoria/2">Villanos</NavLink>
          </li>
          <li>
            <NavLink to="categoria/3">Princesas</NavLink>
          </li>
          
          

        </ul>
      </nav>
      <CarWidget />
    </header>
  )
}

export default NavBar