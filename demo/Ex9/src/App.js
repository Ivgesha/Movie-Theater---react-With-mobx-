import MasterDetails from "./MasterDetails.js";
import { Switch, Route, Link } from "react-router-dom";
import SingleUser from "./SingleUser";
import StageOne from "./StageOne.js";
import StageTwo from "./StageTwo.js";
import StageThree from "./StageThree.js";
import StageFour from "./StageFour.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MasterDetails} />
        <Route
          path="/singleUser/:id/:name/:email/:city"
          component={SingleUser}
        />
        <Route path="/StageOne" component={StageOne} />
        <Route path="/StageTwo" component={StageTwo} />
        <Route path="/StageThree/:firstName/:lastName" component={StageThree} />
        <Route
          path="/StageFour/:firstName/:lastName/:city"
          component={StageFour}
        />
      </Switch>
    </div>
  );
}

export default App;
