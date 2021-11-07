import { useState } from "react";
import { observer } from "mobx-react-lite";
const NewMovieComp = ({ store }) => {
  const [movie, setMovie] = useState({ name: "", rating: "" });
  const [genra, setGenra] = useState({
    Thriller: false,
    ScienceFiction: false,
    Drama: false,
  });
  const [days, setDays] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  const [display, setDisplay] = useState("visiblyOption-off");
  const [isVisible, setIsVisible] = useState(false);
  const showCheckbox = (e) => {
    let visible = isVisible;
    isVisible
      ? setDisplay("visiblyOption-off")
      : setDisplay("visiblyOption-on");
    setIsVisible(!isVisible);
  };

  const onChangeEventHandler = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  const onChangeCheckBoxEventHandler = (e) => {
    const { name, checked } = e.target;
    setGenra({ ...genra, [name]: checked });
  };
  const onChangeDaysCheckboxEventHandler = (e) => {
    const { name, checked } = e.target;
    setDays({ ...days, [name]: checked });
  };
  const addMovieEventHandler = () => {
    let localGanra = [];
    for (const [key, value] of Object.entries(genra)) {
      if (value) localGanra.push(key);
    }

    let localDays = [];
    for (const [key, value] of Object.entries(days)) {
      if (value) localDays.push(key);
    }

    const id = store.movies[store.movies.length - 1].id + 1;

    let { name, rating } = movie;
    console.log(`name: ${name}`);
    console.log(`rating: ${rating}`);
    const movieObj = {
      id: id,
      name: name,
      rating: { average: rating },
      genres: localGanra,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      },
      schedule: { days: localDays },
    };

    store.addMovie(movieObj);
  };

  return (
    <div className="newMovieCompContainer">
      <h1>Add Movie</h1>
      <label>
        Name: <input type="text" name="name" onChange={onChangeEventHandler} />
      </label>
      <br />
      <div>
        <label>Movie Genra:</label>
        <form>
          <div className="multiselect">
            <div className="selectBox" onClick={showCheckbox}>
              <select>
                <option>Select Genras</option>
              </select>
              <div className="overSelect"></div>
            </div>
            <div className={display}>
              <label for="one">
                <input
                  type="checkbox"
                  name="Drama"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Drama
              </label>
              <br />
              <label for="two">
                <input
                  type="checkbox"
                  name="Thriller"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Thriller
              </label>
              <br />
              <label for="three">
                <input
                  type="checkbox"
                  name="ScienceFiction"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Science-Fiction
              </label>
              <br />
              <label for="four">
                <input
                  type="checkbox"
                  name="Horror"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Horror
              </label>
              <br />
              <label for="four">
                <input
                  type="checkbox"
                  name="Romance"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Romance
              </label>
              <br />
              <label for="six">
                <input
                  type="checkbox"
                  name="Action"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Action
              </label>
              <br />
              <label for="seven">
                <input
                  type="checkbox"
                  name="Music"
                  onChange={onChangeCheckBoxEventHandler}
                />
                Music
              </label>
            </div>
          </div>
        </form>

        <br />
      </div>

      <div>
        <h2>Days:</h2>

        <input
          type="checkbox"
          name="Sunday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Sunday </label>
        <br />
        <input
          type="checkbox"
          name="Monday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Monday </label>
        <br />
        <input
          type="checkbox"
          name="Tuesday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Tuesday </label>
        <br />
        <input
          type="checkbox"
          name="Wednesday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Wednesday </label>
        <br />
        <input
          type="checkbox"
          name="Thursday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Thursday </label>
        <br />
        <input
          type="checkbox"
          name="Friday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Friday </label>
        <br />
        <input
          type="checkbox"
          name="Saturday"
          onChange={onChangeDaysCheckboxEventHandler}
        />
        <label> Saturday </label>
        <br />
      </div>
      <label>Rating: </label>

      <input type="number" name="rating" onChange={onChangeEventHandler} />
      <br />
      {/* <button className="addMovie" onClick={addMovieEventHandler}>
        Add Moive
      </button> */}
      <button
        onClick={addMovieEventHandler}
        className="button"
        style={{ verticalAlign: "middle", backgroundColor: "green" }}
      >
        <span>Add Movie</span>
      </button>
    </div>
  );
};

export default observer(NewMovieComp);
