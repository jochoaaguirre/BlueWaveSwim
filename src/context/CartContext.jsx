import React, { createContext, useState, useContext } from 'react';

// 1. Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useCart = () => {
  return useContext(CartContext);
};

// 2. Crear el componente proveedor
export const CartProvider = ({ children }) => {
  // Estado para guardar los productos en el carrito.
  const [cartItems, setCartItems] = useState([]);

  // --- LÓGICA DEL CARRITO ---

  const addToCart = (productToAdd) => {
    // El precio ya está como número en Catalog.jsx, no necesitamos parsearlo
    const numericPrice = productToAdd.price; 

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (existingItemIndex > -1) {
        // El producto ya existe: incrementar cantidad
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Producto nuevo: agregar con cantidad 1
        return [
          ...prevItems,
          {
            id: productToAdd.id,
            name: productToAdd.name,
            price: numericPrice, // Almacenar como número
            quantity: 1,
            image: productToAdd.image
          }
        ];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // El objeto de valor que se pasará a los componentes hijos
  const contextValue = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
  };

  // 3. Proveer el contexto
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};