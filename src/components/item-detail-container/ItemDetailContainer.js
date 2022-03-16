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
  const [cant, setCant] = useState(true);

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
    if (selectedItem?.cant == 0) {
      setCant(false);
    }
  }, [products]);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity: quantity,
    });
  };

  return (
    <div className="small-container single-product">
      <div className="row">
        <div>
          {selectedItem && selectedItem.img && (
            <img src={selectedItem.img} alt="selectedItemImage" height="425" />
          )}
        </div>
        <div className="col-2">
          <h2>{selectedItem && selectedItem.nombre}</h2>
          <br></br>
          <p>{selectedItem && selectedItem.descripcion}</p>
          <h4>
            {"$"}
            {selectedItem && selectedItem.precio}
          </h4>
          <ItemCounter
            stock={selectedItem?.cant}
            setSotckSelected={setQuantity}
          />
          {cant ? (
            <Link to={`/cart`}>
              <button className="btn" onClick={handleAddToCart}>
                {" "}
                Añadir al carrito{" "}
              </button>
            </Link>
          ) : (
            <>
              <span className="alert-stock"> Sin stock</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
