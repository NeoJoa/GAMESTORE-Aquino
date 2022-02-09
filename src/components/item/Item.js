import ItemCounter from "../item-counter/ItemCounter";
import { Link } from "react-router-dom";

const Item = ({ id, img, nombre, descripcion, precio, cant }) => {
  return (
    <div className="card-child">
      <img src={img} height="200" />
      <h2>${precio}</h2>
      <Link to={`/item/${id}`}>
        <button>Comprar producto</button>
      </Link>
    </div>
  );
};

export default Item;
