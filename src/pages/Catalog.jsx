import "../styles/catalog.css";
import { useCart } from '../context/CartContext'; 

const products = [
  //CAMBIO: Precio como número para cálculos
  { id: 1, name: "Goggles de natación", price: 25.00, image: "/images/gafas.jpg" },
  { id: 2, name: "Traje de baño", price: 40.00, image: "/images/traje.jpg" },
  { id: 3, name: "Gorra de natación", price: 15.00, image: "/images/gorro.jpg" }
];

function Catalog() {
  const { addToCart } = useCart(); 

  return (
    <div className="catalog">
      <h2>Listado de productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {/* Mostrar el precio formateado */}
            <p>${product.price.toFixed(2)}</p>
            
            <button onClick={() => addToCart(product)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;