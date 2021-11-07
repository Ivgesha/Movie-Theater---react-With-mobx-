import { Switch, Route } from "react-router-dom";
import HomePageComp from "./HomePageComp.js";
import MoreInfoComp from "./MoreInfoComp.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageComp} />
        <Route exact path="/moreInfo/:id" component={MoreInfoComp} />
      </Switch>
    </div>
  );
}

export default App;
