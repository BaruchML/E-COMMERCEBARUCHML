import { Link, NavLink } from 'react-router-dom';
import CarWidget from "../components/CarWidget/CarWidget";
import '../styles/NavBar.scss'

const NavBar = () => {
  return (
    <>
    <header className=''>
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
            <NavLink to="categoria/3">Princesas</NavLink>
          </li>
          <li>
            <NavLink to="categoria/2">Villanos</NavLink>
          </li>
          <li>
            <NavLink to="categoria/4">Extras</NavLink>
          </li>


        </ul>
      </nav>
      <CarWidget />
    </header>
    </>
    
  )
}

export default NavBar