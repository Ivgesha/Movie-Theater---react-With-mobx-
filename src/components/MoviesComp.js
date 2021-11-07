import MovieComp from "./MovieComp";
import { observer } from "mobx-react-lite";

const MoviesComp = ({ store }) => {
  const SelectedMovieId = (selectedId) => {
    // store.setSelectedMovieId(selectedId);
    // set selectedMovie
    store.setSelectedMovie(selectedId);
  };

  return (
    <div>
      {store.getMovies
        .filter((singleMovie) => {
          return singleMovie.name.indexOf(store.getSearchedValue) !== -1;
        })
        .filter((singleMovie) => {
          if (!store.getTopRationg) return true;
          if (singleMovie.rating.average >= 8) return true;
          else return false;
        })
        .map((singleMovie) => {
          return (
            <MovieComp
              key={singleMovie.id}
              singleMovie={singleMovie}
              callback={SelectedMovieId}
            />
          );
        })}
    </div>
  );
};

export default observer(MoviesComp);
