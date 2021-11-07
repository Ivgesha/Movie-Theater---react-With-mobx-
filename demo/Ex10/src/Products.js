import { observer } from "mobx-react-lite";
import Product from "./Product.js";
const Products = ({ store }) => {
  const removeCallback = (returnedId) => {
    store.removeProduct(returnedId);
  };
  return (
    <div>
      {
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Current products in order
        </h1>
      }
      {store.allProducts.map((item, index) => {
        return <Product key={index} item={item} callback={removeCallback} />;
      })}
    </div>
  );
};

export default observer(Products);
