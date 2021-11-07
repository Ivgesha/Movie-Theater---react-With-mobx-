const Product = (props) => {
  const removeItem = () => {
    props.callback(props.item.id);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <h2>Product Data</h2>
      <label>Name: {props.item.name}</label>
      <br />
      <label>Price: {props.item.price}</label>
      <br />
      <button style={{ margin: "8px" }} onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default Product;
