import "../styles/catalog.css";


const products = [
  { id: 1, name: "Goggles de natación", price: "$25", image: "/images/gafas.jpg" },
  { id: 2, name: "Traje de baño", price: "$40", image: "/images/traje.jpg" },
  { id: 3, name: "Gorra de natación", price: "$15", image: "/images/gorro.jpg" }
];

function Catalog() {
  return (
    <div className="catalog">
      <h2>Listado de productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;