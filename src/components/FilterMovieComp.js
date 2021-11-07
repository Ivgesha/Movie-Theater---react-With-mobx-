import { observer } from "mobx-react-lite";
import { useState } from "react";
// for testing
import { toJS } from "mobx";

// for testing
const FilterMovieComp = ({ store }) => {
  const [display, setDisplay] = useState("visiblyOption-off");
  const [isVisible, setIsVisible] = useState(false);
  const selectedGenreOnChangeEventHandler = (e) => {
    const { name, checked } = e.target;
    console.log(`name: ${name} , chcked: ${checked}`);

    // store.setReportsSelectedGenre(e.target.value);
    store.setReportsSelectedGenresArr(name, checked);
  };

  const onDayChangeEventHandler = (e) => {
    const { name, checked } = e.target;
    console.log(`day: ${name}, checked: ${checked}`);

    checked
      ? store.setReportsSelectedDays(name)
      : store.removeReportsSelectedDays(name);

    console.log(toJS(store.getReportsSelectedDays));
  };

  const showCheckbox = (e) => {
    isVisible
      ? setDisplay("visiblyOption-off")
      : setDisplay("visiblyOption-on");
    setIsVisible(!isVisible);
  };
  return (
    <div className="filterMovies">
      <h1>Filter By: </h1>
      <strong>Days:</strong>
      <div className="filterByDays">
        <div className="dayFilter">
          <label>Sunday</label>
          <input
            type="checkbox"
            name="sunday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
        <div className="dayFilter">
          <label>Monday</label>
          <input
            type="checkbox"
            name="monday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
        <div className="dayFilter">
          <label>Tuesday</label>
          <input
            type="checkbox"
            name="tuesday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
        <div className="dayFilter">
          <label>Wednesday</label>
          <input
            type="checkbox"
            name="wednesday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
        <div className="dayFilter">
          <label>Thursday</label>
          <input
            type="checkbox"
            name="thursday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
        <div className="dayFilter">
          <label>Friday</label>
          <input
            type="checkbox"
            name="friday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
        <div className="dayFilter">
          <label>Saturday</label>
          <input
            type="checkbox"
            name="saturday"
            onChange={onDayChangeEventHandler}
          />
        </div>
        <br />
      </div>

      <div>
        <h2>Genres:</h2>
        <form>
          <div className="multiselectFilterGenre">
            <div className="selectBoxFilterGenre" onClick={showCheckbox}>
              <select>
                <option>Select Genras</option>
              </select>
              <div className="overSelectFilterGenre"></div>
            </div>
            <div className={display}>
              <label for="one">
                <input
                  type="checkbox"
                  name="Drama"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Drama
              </label>
              <br />
              <label for="two">
                <input
                  type="checkbox"
                  name="Thriller"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Thriller
              </label>
              <br />
              <label for="three">
                <input
                  type="checkbox"
                  name="Science-Fiction"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Science-Fiction
              </label>
              <br />
              <label for="four">
                <input
                  type="checkbox"
                  name="Horror"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Horror
              </label>
              <br />
              <label for="four">
                <input
                  type="checkbox"
                  name="Romance"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Romance
              </label>
              <br />
              <label for="six">
                <input
                  type="checkbox"
                  name="Action"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Action
              </label>
              <br />
              <label for="seven">
                <input
                  type="checkbox"
                  name="Music"
                  onChange={selectedGenreOnChangeEventHandler}
                />
                Music
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(FilterMovieComp);
