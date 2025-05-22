import { Link, NavLink } from 'react-router-dom';
import CarWidget from "../Cart/CarWidget/CarWidget";

const NavBar = () => {
  return (
    <>
    <header className='navbar'>
    <div className='logo-container'>

      <Link to="/">
        <img className="logo" src={"../img/logo.png"} alt="retro-games-logo" />
      </Link>
    </div>
      <nav className='navbar_nav'>
        <ul className='navLinks'>
          <li>
            <NavLink to="/"><h1>Inicio</h1></NavLink>
          </li>
          <li>
            <NavLink to="/shop"><h1>Tienda</h1></NavLink>
          </li>
          <li>
            <NavLink to="categoria/3"><h1>Destacado</h1></NavLink>
          </li>
          {/* <li>
            <NavLink to="categoria/2">Villanos</NavLink>
          </li>
          <li>
            <NavLink to="categoria/4">Extras</NavLink>
          </li> */}


        </ul>
      </nav>
      <CarWidget />
    </header>
    </>
    
  )
}

export default NavBar