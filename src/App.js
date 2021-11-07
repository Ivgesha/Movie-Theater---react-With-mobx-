import { Route, Switch } from "react-router";
import MoviesCollection from "./utils/MoviesCollection.js";
import Login from "./components/Login.js";
import HomePage from "./components/HomePage.js";
import ReportsComp from "./components/ReportsComp.js";
import "./App.css";

function App() {
  const moviesCollection = new MoviesCollection();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {<Login store={moviesCollection} />}
        </Route>
        <Route path="/homePage">{<HomePage store={moviesCollection} />}</Route>
        <Route path="/reports">
          {<ReportsComp store={moviesCollection} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
