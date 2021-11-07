import MoviesComp from "./MoviesComp.js";
import FilterMovieComp from "./FilterMovieComp.js";
import FilteredMoviesComp from "./FilteredMoviesComp.js";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const ReportsComp = ({ store }) => {
  useEffect(() => {
    store.setSearchedValue("");
  }, []);

  return (
    <div className="reportsBackground">
      <div className="reporstContainer">
        <div className="reports-leftSide">
          {<h1>Welcome: {sessionStorage.getItem("userName")}</h1>}
          <MoviesComp store={store} />
        </div>
        <div className="reports-rightSide">
          <div className="reports-rightSide-flterComp">
            <FilterMovieComp store={store} />
          </div>
          <div className="reports-rightSide-filteredMovies">
            <FilteredMoviesComp store={store} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ReportsComp);
