import "./App.css";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import Navbar from "./components/Navbar/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
