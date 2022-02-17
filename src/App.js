import "./App.css";
import { CartProvider } from "./context/CartContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
