import NewProdComp from "./NewProdComp.js";
import ProductStore from "./ProductStore.js";
import TotalPriceComp from "./TotalPriceComp.js";
import Products from "./Products.js";
import "./App.css";

function App() {
  const productStore = new ProductStore();
  return (
    <div className="App">
      <Products store={productStore} />
      <NewProdComp store={productStore} />
      <TotalPriceComp store={productStore} />
    </div>
  );
}

export default App;
