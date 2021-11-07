import { useState } from "react";
const SearchComp = (props) => {
  const [search, setSearch] = useState("");
  const searchOnChangeHandler = (e) => {
    setSearch(e.target.value);
    props.callback(e.target.value);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={searchOnChangeHandler} />
      <button>Add</button>
    </div>
  );
};

export default SearchComp;
