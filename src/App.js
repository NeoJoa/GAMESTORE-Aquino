import "./App.css";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="shopTitle">
        <h1>Bienvenidos a GAMESTORE</h1>
      </div>
      <ItemListContainer />
    </div>
  );
}

export default App;
