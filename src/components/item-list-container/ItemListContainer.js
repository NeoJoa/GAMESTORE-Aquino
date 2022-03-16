import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import Item from "../item/Item";
import LoadIcon from "../../icon/Loading";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .finally(() => setIsLoading(false));
  }, []);
  const filtredProducts = products.filter(({ category }) => category === id);
  return (
    <div>
      <div className="shopTitle">
        <h1>Bienvenidos a GAMESTORE</h1>
      </div>
      {isLoading ? (
        <div className="bottom">
          {" "}
          <LoadIcon />
        </div>
      ) : (
        <>
          <div className="cont-card">
            <div className="cards">
              {!id &&
                products.map((product) => (
                  <Item key={product.id} {...product} />
                ))}
              {id &&
                filtredProducts.map((product) => (
                  <Item key={product.id} {...product} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
