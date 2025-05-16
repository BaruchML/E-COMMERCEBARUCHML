import { Link, NavLink } from 'react-router-dom';
import CarWidget from "../components/Cart/CarWidget/CarWidget";

const NavBar = () => {
  return (
    <>
    <header className='navbar'>
    <div>

      <Link to="/">
        <img className="logo" src={"../img/logo-2.png"} alt="retro-games-logo" />
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
            <NavLink to="categoria/3"><h1>Noticias</h1></NavLink>
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