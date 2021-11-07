import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const url = "https://api.tvmaze.com/shows";
  const [moveis, setMovies] = useState([]);
  useEffect(async () => {
    const res = await axios.get(url);
    const onlyTen = res.data.splice(0, 10);
    setMovies(onlyTen);
  }, []);
  return (
    <div style={{ border: "2px solid red" }}>
      {moveis.map((singleMovie) => {
        return (
          <div
            key={singleMovie.id}
            style={{
              border: "2px solid blue",

              display: "flex",
              flexDirection: "column",
              width: "500px",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <h2>{singleMovie.name}</h2>
            <img
              src={singleMovie.image.medium}
              alt="Picture"
              style={{ width: "200px", padding: "4px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
