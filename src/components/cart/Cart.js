import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);
  const precioXCant = (precio, quantity) => {
    return precio * quantity;
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {items.length === 0 ? (
        <div>
          <h2>Tu carrito esta vacio</h2>

          <Link to={`/`}>
            <button>Volver a inicio</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <ul>
              {items.map((item) => (
                <li>
                  Juego: {item.item.nombre} - Plataforma: {item.item.category} -
                  Cantidad solicitada: {item.quantity} - Precio: {"$"}
                  {precioXCant(item.item.precio, item.quantity)}
                  <button onClick={() => removeItem(item.item.id)}>
                    {" "}
                    Eliminar{" "}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={clear}>Vaciar Carrito</button>
          <button>Terminar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
