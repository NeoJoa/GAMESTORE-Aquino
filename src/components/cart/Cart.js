import { addDoc, collection, doc, writeBatch } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);
  const precioXCant = (precio, quantity) => {
    return precio * quantity;
  };

  // Creando el formulario
  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleName = (event) => {
    setBuyer({ ...buyer, nombre: event.target.value });
  };
  const handleEmail = (event) => {
    setBuyer({ ...buyer, email: event.target.value });
  };
  const handleCellNumber = (event) => {
    setBuyer({ ...buyer, telefono: event.target.value });
  };

  const handdleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // Actualizando Items del Cart y enviar Orden
  const [orderId, setOrderId] = useState(null);

  const sendOrder = () => {
    const order = {
      buyer,
      item: items,
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));

    const batch = writeBatch(db);
    items.forEach((item) => {
      const itemRef = doc(db, "items", item.item.id);
      batch.update(itemRef, { cant: item.item.cant - item.quantity });
    });
    batch.commit();
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
                <li key={item.item.id}>
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

          <div>
            <form onSubmit={handdleSubmit}>
              <input
                onChange={handleName}
                value={buyer.nombre}
                placeholder="Nombre"
                name="name"
              />
              {submitted && !buyer.nombre ? (
                <span>Porfavor ingrese su nombre</span>
              ) : null}
              <input
                onChange={handleEmail}
                value={buyer.email}
                placeholder="Email"
                name="email"
              />
              {submitted && !buyer.email ? (
                <span>Porfavor ingrese su email</span>
              ) : null}
              <input
                onChange={handleCellNumber}
                value={buyer.telefono}
                placeholder="Telefono"
                name="cellnumber"
              />
              {submitted && !buyer.telefono ? (
                <span>Porfavor ingrese su telefono</span>
              ) : null}
              <button onClick={sendOrder} type="submit">
                Terminar Compra
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
