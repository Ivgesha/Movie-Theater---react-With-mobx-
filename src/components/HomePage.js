// import axios from "axios";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
// import { useEffect } from "react";
import SearchComp from "./SearchComp";
import MoviesComp from "./MoviesComp";
import NewMovieComp from "./NewMovieComp";
import MoreInfoComp from "./MoreInfoComp";
const HomePage = ({ store }) => {
  // const moviesUrl = "http://api.tvmaze.com/shows";
  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get(moviesUrl);
  //     store.setMovies(res.data.splice(0, 20));
  //     console.log(res.data);
  //   })();
  // }, []);

  const checkboxEventHandler = (e) => {
    console.log("from handler " + e.target.value);
    store.setTopRating(e.target.checked);
  };

  return (
    <div className="homePageContainer">
      <div className="homePageContainer-leftSide">
        {<h1>Welcome: {sessionStorage.getItem("userName")}</h1>}
        <div className="moviesList">
          <Link className="moveToReports" to="/reports">
            Move to reporst &gt;&gt;
          </Link>
          <br />
          <br />
          <SearchComp store={store} />
          <label>Top rating </label>
          <input
            type="checkbox"
            onClick={checkboxEventHandler}
            style={{ margin: "20px" }}
          />
          <MoviesComp store={store} />
        </div>
      </div>
      <div className="homePageContainer-rightSide">
        <div className="homePageContainer-rightSide-newMovieContainer">
          <NewMovieComp store={store} />
        </div>
        <div className="homePageContainer-rightSide-moreInfo">
          <MoreInfoComp store={store} />
        </div>
      </div>
    </div>
  );
};

export default observer(HomePage);
