import "../styles/cart.css";

function Cart() {
  return (
    <div className="cart">
      <h2>Tu carrito</h2>
      <p>Tu lista de compras aparecera aqui.</p>
      <div className="cart-items">
        <p>Aun no has agregado ningun objeto.</p>
      </div>
      <button className="checkout-button">Proceder a comprar</button>
    </div>
  );
}

export default Cart;