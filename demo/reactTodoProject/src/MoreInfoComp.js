import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MoreTodosComp from "./MoreTodosComp.js";
import MorePostsComp from "./MorePostsComp.js";
import axios from "axios";

const MoreInfoComp = () => {
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";

  const { id } = useParams();
  const [todoList, setTodoList] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      const todoRes = await axios.get(`${todosUrl}?userId=${id}`);
      setTodoList(todoRes.data.splice(0, 3));
      const postRes = await axios.get(`${postsUrl}?userId=${id}`);
      setPostList(postRes.data.splice(0, 3));
    })();
  }, []);
  return (
    <div>
      <MoreTodosComp todoList={todoList} id={id} />
      <MorePostsComp postList={postList} id={id} />
    </div>
  );
};

export default MoreInfoComp;
