import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  // Crear el estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cambiar el estado (abrir/cerrar)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú después de hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>BlueWave Swim</h1>
      
      {/* Botón de hamburguesa visible solo en móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {/* Usamos un operador ternario para cambiar el icono */}
        {isMenuOpen ? '✕' : '☰'} 
      </button>

      {/* Aplicar clase condicionalmente para mostrar/ocultar el menú */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        <li><Link to="/users" onClick={closeMenu}>Usuarios</Link></li>
        <li><Link to="/catalog" onClick={closeMenu}>Productos</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
        <li><Link to="/cart" onClick={closeMenu}>Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;