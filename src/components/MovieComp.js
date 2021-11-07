const MovieComp = (props) => {
  const showMoreInfoEventHandler = () => {
    console.log("clicked on div with id: " + props?.singleMovie.id);
    props.callback(props?.singleMovie.id);
  };

  return (
    <div className="singleMovieContainer" onClick={showMoreInfoEventHandler}>
      <div className="pictureSection">
        <img src={props.singleMovie?.image?.medium} atl="Awesome movie!" />
      </div>
      <div className="textSection">
        <div>
          <strong>Id: </strong>
          <span>{props?.singleMovie.id}</span>
        </div>
        <br />
        <div>
          <strong>Name: </strong>
          <span>{props?.singleMovie.name}</span>
        </div>
        <br />
        <div>
          <strong>Genre</strong>
          <ul>
            {props?.singleMovie.genres.map((singleGenre, index) => {
              return <li key={index}>{singleGenre}</li>;
            })}
          </ul>
        </div>
        <div>
          <strong>days</strong>
          <ul>
            {props?.singleMovie.schedule.days.map((day, index) => {
              return <li key={index}>{day}</li>;
            })}
          </ul>
        </div>
        <h3>Rating: {props?.singleMovie?.rating?.average}</h3>
      </div>
    </div>
  );
};

export default MovieComp;
