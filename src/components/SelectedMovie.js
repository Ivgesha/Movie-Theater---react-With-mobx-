import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";

// for test only
import { toJS } from "mobx";
// for test only

const SelectedMovie = ({ store }) => {
  // const [movieName, setMovieName] = useState(store.getSelectedMovie.name);
  // const [movieRating, setMovieRating] = useState(
  // store.getSelectedMovie.rating.average
  // );

  const changeDayCheckbox = (e) => {
    const { name, checked } = e.target;
    store.setSelectedDay(name, checked);
  };

  const addRemoveGenre = (e) => {
    const { name, checked } = e.target;
    store.setSelectedGenre(name, checked);
  };
  const deleteMovie = () => {
    store.removeMovie();
    store.setSelectedMovie(0);
  };
  const updateMovie = () => {
    store.updateMovie();
  };

  const changeRating = (e) => {
    store.updateSelectedMovieRating(e.target.value);
  };
  const changeName = (e) => {
    store.updateSelectedMovieName(e.target.value);
  };

  return (
    <div className="selectedMovieContainer">
      <label>Movie id: {store.getSelectedMovie.id}</label>
      <br />
      <label>Name: </label>
      <input
        type="text"
        value={store.selectedMovieName}
        onChange={changeName}
      />
      <br />
      <h3>Genre: </h3>

      {store.selectedGenres.map((gObj, index) => {
        return (
          <span key={index}>
            <label>
              <input
                name={gObj.genre}
                type="checkbox"
                checked={gObj.checked}
                onChange={addRemoveGenre}
              />
              {gObj.genre}
            </label>
            <br />
          </span>
        );
      })}

      <h3>Days: </h3>
      <div
        className="chckedDaysForUpdate"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {store.selectedDays?.map((dayObj, index) => {
          return (
            <div
              key={index}
              className="dayCheckBoxAndLabel"
              style={{ margin: "4px" }}
            >
              <label>
                {dayObj.day}:
                <br />
                <input
                  name={dayObj.day}
                  type="checkbox"
                  checked={dayObj.checked}
                  onChange={changeDayCheckbox}
                />
              </label>
            </div>
          );
        })}
      </div>
      {/* <img src={store.getSelectedMovie.image.medium} alt="movie pic" /> */}
      <br />
      <label>Rating: </label>
      <input
        type="number"
        value={store.selectedMovieRating}
        onChange={changeRating}
      />
      <br />
      <br />
      <button onClick={updateMovie} className="updateMovie">
        Update
      </button>
      <button onClick={deleteMovie} className="deleteMovie">
        Delete
      </button>
    </div>
  );
};

export default observer(SelectedMovie);
