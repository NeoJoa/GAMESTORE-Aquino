import ItemCounter from "../item-counter/ItemCounter";

const Item = ({ id, nombre, precio, cant }) => {
  return (
    <div className="card-child">
      <h2>Codigo #{id}</h2>
      <h2>Juego: {nombre}</h2>
      <h2>Precio: {precio}</h2>

      <ItemCounter stock={cant} />
    </div>
  );
};

export default Item;
