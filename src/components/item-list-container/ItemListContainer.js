import { useParams } from "react-router-dom";
import Item from "../item/Item";
import useProducts from "../../hooks/useProducts";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();
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
