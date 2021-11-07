import { useState } from "react";
import MovieChild from "./MovieChild";
const MoviePicker = () => {
  const [movies] = useState([
    {
      id: 1,
      name: "Under the Dome",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
    {
      id: 2,
      name: "Person of Interest",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    },
    {
      id: 3,
      name: "Bitten",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
    },
  ]);

  const [movie, setMovie] = useState(movies);

  const loadSelect = movies.map((movie, index) => {
    return <option key={index}>{movie.name}</option>;
  });

  const onChangeSelectedData = (event) => {
    let singleMovie = movies.filter((movie) => {
      return movie.name == event.target.value;
    });
    setMovie(singleMovie);
  };

  return (
    <div>
      <select onChange={onChangeSelectedData}>{loadSelect}</select>
      <MovieChild movie={movie} />
    </div>
  );
};

export default MoviePicker;
