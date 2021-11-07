import { observer } from "mobx-react-lite";
const TotalPriceComp = ({ store }) => {
  return (
    <div>
      <label>Total price: {store.totalPrice}</label>
    </div>
  );
};

export default observer(TotalPriceComp);
