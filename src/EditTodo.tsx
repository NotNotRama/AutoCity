import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, RouteProps } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";

export const EditTodo = () => {
  const match = useRouteMatch<any>();
  const [todo, setTodo] = useState<Todo | undefined>();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch(`http://localhost:4000/${match.params.id}`);
      const todo = await res.json();
      console.log(todo);
      setTodo(todo);
      setTitle(todo.title);
      setDesc(todo.description);
    };
    fetchTodo();
  }, []);

  const handleSubmit = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    await fetch(`http://localhost:4000/${match.params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: desc,
      }),
    });
    setTitle("");
    setDesc("");
    history.push("/");
  };

  return todo ? (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Title</h1>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <h1>Description</h1>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  ) : (
    <div>Loading</div>
  );
};
