const ChildComp = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => {
          return <li key={index}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ChildComp;
