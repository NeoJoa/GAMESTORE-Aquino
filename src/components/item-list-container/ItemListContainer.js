import Item from "../item/Item";
const items = [
  { id: "1", nombre: "Assasins Creed", precio: "4000", cant: "6" },
  { id: "2", nombre: "Battlefield 1", precio: "3500", cant: "4" },
  { id: "3", nombre: "Batman", precio: "3000", cant: "0" },
];

const ItemListContainer = () => {
  return (
    <div>
      <div className="shopTitle">
        <h1>Bienvenidos a GAMESTORE</h1>
      </div>
      <div className="cards">
        {items.map(({ id, nombre, precio, cant }) => (
          <Item key={id} id={id} nombre={nombre} precio={precio} cant={cant} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
