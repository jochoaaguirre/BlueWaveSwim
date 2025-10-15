import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BlueWave Swim</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/users">Usuarios</Link></li>
        <li><Link to="/catalog">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;