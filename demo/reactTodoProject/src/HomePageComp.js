import SearchComp from "./SearchComp.js";
import UsersComp from "./UsersComp.js";
import { useState } from "react";

const HomePageComp = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const shearchedValueFromInput = (returedValueFromChild) => {
    setSearchedValue(returedValueFromChild);
  };

  return (
    <div>
      <SearchComp callback={shearchedValueFromInput} />
      <UsersComp searchedValue={searchedValue} />
    </div>
  );
};

export default HomePageComp;
