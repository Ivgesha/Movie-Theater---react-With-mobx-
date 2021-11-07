const Person = (props) => {
  console.log(props.name);
  console.log(props.tasks);
  return (
    <div className="singlePerson">
      <h1>{props.name}</h1>
      <br />

      <h2>Tasks:</h2>
      <br />

      {props.tasks.map((singleTask, index) => {
        return (
          <span key={index} className="taskSpan">
            <h3>Title: {singleTask.title}</h3>
            <h3>Completed: {singleTask.completed}</h3>
          </span>
        );
      })}

      {/* <h3>Title: {props.title}</h3>
        <h3>Completed: {props.completed}</h3> */}
    </div>
  );
};

export default Person;
