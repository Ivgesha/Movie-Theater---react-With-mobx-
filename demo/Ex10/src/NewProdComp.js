import { useState } from "react";
import { observer } from "mobx-react-lite";
const NewProdComp = ({ store }) => {
  const [item, setItem] = useState({ name: "", price: "" });
  const [counter, setCounter] = useState(0);
  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  const addProduct = () => {
    store.addNewProduct({ ...item, id: counter });
    let temp = counter;
    temp += 1;
    setCounter(temp);
  };
  return (
    <div>
      <h1>Order new Product </h1>
      <label>Name: </label>
      <input type="text" name="name" onChange={changeEventHandler} required />
      <br />
      <label>Price: </label>
      <input
        type="number"
        name="price"
        onChange={changeEventHandler}
        required
      />
      <br />
      <button onClick={addProduct}>Add</button>
    </div>
  );
};

export default observer(NewProdComp);
