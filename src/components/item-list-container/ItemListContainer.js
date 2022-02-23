import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import Item from "../item/Item";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

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
  }, []);
  const filtredProducts = products.filter(({ category }) => category === id);

  return (
    <div>
      <div className="shopTitle">
        <h1>Bienvenidos a GAMESTORE</h1>
      </div>
      <div className="cards">
        {!id &&
          products.map((product) => <Item key={product.id} {...product} />)}
        {id &&
          filtredProducts.map((product) => (
            <Item key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
