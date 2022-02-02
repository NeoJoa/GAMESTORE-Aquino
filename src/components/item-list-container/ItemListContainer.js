import { useEffect, useState } from "react";
import { productosAPI } from "../../helpers/promises";
import Loading from "../../icon/Loading";
import Item from "../item/Item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productosAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="load-icon">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="cards">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
