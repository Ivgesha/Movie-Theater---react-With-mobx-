import { observer } from "mobx-react-lite";
import MovieComp from "./MovieComp";

const FilteredMoviesComp = ({ store }) => {
  const SelectedMovieId = (returnedMovieId) => {
    console.log("Whos calling ");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {store.getMovies
        .filter((movie) => {
          if (store.getReportsSelectedGenresArr.length === 0) return true;
          return store.getReportsSelectedGenresArr.every((el) => {
            return movie.genres.includes(el);
          });
        })
        .filter((movie) => {
          if (store.getReportsSelectedDays.length === 0) return true;
          return store.getReportsSelectedDays.every((el) => {
            let tempDays = movie.schedule.days.map((d) => {
              return d.toLowerCase();
            });
            return tempDays.includes(el);
          });
        })
        .map((singleMovie, index) => {
          return (
            <span key={index} style={{ margin: "20px" }}>
              <MovieComp
                key={singleMovie.id}
                singleMovie={singleMovie}
                callback={SelectedMovieId}
              />
            </span>
          );
        })}
    </div>
  );
};

export default observer(FilteredMoviesComp);
