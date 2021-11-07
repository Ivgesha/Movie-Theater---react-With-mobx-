import axios from "axios";

const MoreTodosComp = (props) => {
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const markAsComplete = async (e, id) => {
    let todo = props.todoList.filter((singleTodo) => {
      return singleTodo.id === id;
    });
    todo[0].completed = true;
    // send to axios
    const res = await axios.put(`${todosUrl}/${id}`, { ...todo });
    console.log(res.data);
  };

  return (
    <div>
      {<label style={{ margin: "16px" }}>Todos - User: {props.id}</label>}
      <div style={{ border: "1px solid black", width: "500px" }}>
        {props.todoList.map((todo, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid purple",
                margin: "15px",
                padding: "15px",
                width: "400px",
              }}
            >
              <strong>Title:</strong> {todo.title}
              <br />
              <br />
              <strong>Completed:</strong> {todo.completed.toString()}
              {!todo.completed && (
                <button
                  onClick={(e) => {
                    markAsComplete(e, todo.id);
                  }}
                  style={{
                    marginLeft: "100px",
                    backgroundColor: "orange",
                    borderRadius: "4px",
                    fontSize: "16px",
                    padding: "4px",
                  }}
                >
                  Mark completed
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreTodosComp;
