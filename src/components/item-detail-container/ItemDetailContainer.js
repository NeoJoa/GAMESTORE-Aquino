import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import ItemCounter from "../item-counter/ItemCounter";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity,
    });
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
        <h2>
          {"$"}
          {selectedItem && selectedItem.precio}
        </h2>
        <ItemCounter
          stock={selectedItem?.cant}
          setSotckSelected={setQuantity}
        />
        <Link to={`/cart`}>
          <button onClick={handleAddToCart}> Añadir al carrito </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
