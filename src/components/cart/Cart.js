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
  const [valid, setValid] = useState(false);

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
    if (buyer.nombre && buyer.email && buyer.telefono) {
      setValid(true);
    }
  };

  // Actualizando Items del Cart y enviar Orden
  const [orderId, setOrderId] = useState(null);

  const sendOrder = () => {
    if (submitted && valid) {
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
      setTimeout(() => {
        clear();
      }, 100);
      alert("Gracias por su Compra");
    }
  };

  return (
    <div>
      <h1 className="cart-title">Carrito de Compras</h1>
      {items.length === 0 ? (
        <div className="cart-title">
          <h2>Tu carrito esta vacio</h2>

          <Link to={`/`}>
            <button className="btn">Volver a inicio</button>
          </Link>
        </div>
      ) : (
        <div className="small-container cart-page">
          <table>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
            <>
              {items.map((item) => (
                <tr key={item.item.id}>
                  <td>
                    <div className="cart-info">
                      <img src={item.item.img} />
                      <div>
                        <p>{item.item.nombre}</p>
                        <p>
                          Precio: {"$"}
                          {item.item.precio}
                        </p>
                        <a onClick={() => removeItem(item.item.id)}>Eliminar</a>
                      </div>
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {"$"}
                    {precioXCant(item.item.precio, item.quantity)}
                  </td>
                </tr>
              ))}
            </>
          </table>
          <div className="total-price">
            <table>
              <tr>
                <td>
                  <button className="btn" onClick={clear}>
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
            </table>
          </div>

          <div className="container top">
            <div className="row">
              <div className="col-2">
                <div className="form-container">
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

                    <button className="btn" onClick={sendOrder} type="submit">
                      Terminar Compra
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
