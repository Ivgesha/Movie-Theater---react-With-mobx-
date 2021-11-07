const MovieChild = (props) => {
  return (
    <div>
      <div className="movieConteiner">
        <h1>Name: {props.movie[0].name}</h1>
        <br />
        <img src={props.movie[0].pic} />
      </div>
    </div>
  );
};

export default MovieChild;
