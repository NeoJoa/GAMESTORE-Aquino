import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemCounter from "../item-counter/ItemCounter";

const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

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
        <ItemCounter stock={selectedItem && selectedItem.cant} />
        <button> Añadir al carrito </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
