import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadIcon from "../../icon/Loading";
const Item = ({ id, img, nombre, descripcion, precio, cant }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>
          <LoadIcon />
        </h2>
      ) : (
        <div className="card-child">
          <img src={img} height="200" />
          <h2>
            {"$"}
            {precio}
          </h2>
          <Link to={`/item/${id}`}>
            <button>Comprar producto</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Item;
