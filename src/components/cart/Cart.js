import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div>
        <ul>
          {items.map((item) => (
            <li>
              Juego: {item.item.nombre} - Plataforma: {item.item.category} -
              Cantidad solicitada: {item.quantity}
              <button onClick={() => removeItem(item.item.id)}>
                {" "}
                Eliminar{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={clear}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
