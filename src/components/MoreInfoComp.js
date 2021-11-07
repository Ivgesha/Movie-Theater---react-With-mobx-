import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import SelectedMovie from "./SelectedMovie.js";
const MoreInfoComp = ({ store }) => {
  return <div>{store.selectedMovie && <SelectedMovie store={store} />}</div>;
};

export default observer(MoreInfoComp);
