const ItemCounter = ({ onAdd, onTake, count }) => {
  return (
    <>
      <div>
        <button onClick={onTake}>-</button>
        <span>{count}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </>
  );
};

export default ItemCounter;
