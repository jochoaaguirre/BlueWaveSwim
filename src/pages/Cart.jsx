// pages/cart.jsx
import "../styles/cart.css";
import { useCart } from '../context/CartContext'; 

// Tasa de IVA (15%)
const IVA_RATE = 0.15;

// Función de ayuda para formatear moneda
const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

function Cart() {
  // Obtener items y funciones del contexto
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // 1. Calcular el SUBTOTA (Suma del valor de todos los productos)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 2. Calcular el monto del IVA (15% del subtotal)
  const ivaAmount = subtotal * IVA_RATE;

  // 3. Calcular el TOTAL FINAL
  const totalConIVA = subtotal + ivaAmount;

  return (
    <div className="cart">
      <h2>Tu Carrito de Compras 🛍️</h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Aún no has agregado ningún objeto. ¡Explora el catálogo!</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>Precio Unitario: {formatPrice(item.price)}</p>
                  <p>Subtotal por Item: {formatPrice(item.price * item.quantity)}</p>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            {/* RESUMEN DEL TOTAL Y EL IVA */}
            <div className="cart-summary">
              <p>Subtotal: {formatPrice(subtotal)}</p>
              <p>IVA ({IVA_RATE * 100}%): {formatPrice(ivaAmount)}</p>
              <h3>Total Final: {formatPrice(totalConIVA)}</h3>
            </div>
          </>
        )}
      </div>

      <button className="checkout-button" disabled={cartItems.length === 0}>
        Proceder a comprar ({cartItems.length} items)
      </button>
    </div>
  );
}

export default Cart;