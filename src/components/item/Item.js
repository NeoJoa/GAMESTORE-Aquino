import ItemCounter from "../item-counter/ItemCounter";

const Item = ({ id, img, nombre, descripcion, precio, cant }) => {
  return (
    <div className="card-child">
      <div>
        <img src={img} alt="Assassins Creed Odyssey" height="500" />
      </div>
      <div className="card-text">
        <h2>Juego: {nombre}</h2>
        <p>{descripcion}</p>
        <h2>${precio}</h2>

        <ItemCounter stock={cant} />
      </div>
    </div>
  );
};

export default Item;
