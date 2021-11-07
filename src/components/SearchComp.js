import { observer } from "mobx-react-lite";
const SearchComp = ({ store }) => {
  const changeEventHandler = (e) => {
    const searchedValue = e.target.value;
    store.setSearchedValue(searchedValue);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Filter..."
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default observer(SearchComp);
