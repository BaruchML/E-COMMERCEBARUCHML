import { Link, NavLink } from 'react-router-dom';
import CarWidget from "../components/Cart/CarWidget/CarWidget";

const NavBar = () => {
  return (
    <>
    <header className='navbar'>
      <Link to="/">
        <img className="LogoNintendo" src={"../img/logo.png"} alt="Logo Nintendo" />
      </Link>
      <nav className='navbar_nav'>
        <ul className='navLinks'>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
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