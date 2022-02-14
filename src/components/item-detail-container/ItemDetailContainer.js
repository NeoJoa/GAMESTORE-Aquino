import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemCounter from "../item-counter/ItemCounter";
const cant = 5;
const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  const addCounter = () => {
    if (counter >= cant) return;
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <div className="card-child card-detail">
      <div>
        {selectedItem && selectedItem.img && (
          <img src={selectedItem.img} alt="selectedItemImage" height="500" />
        )}
      </div>
      <div className="card-text">
        <h2>{selectedItem && selectedItem.nombre}</h2>
        <p>{selectedItem && selectedItem.descripcion}</p>
        <h2>${selectedItem && selectedItem.precio}</h2>
        <ItemCounter onAdd={addCounter} onTake={minusCounter} count={counter} />
        <Link to={`/cart`}>
          <button> Añadir al carrito </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
