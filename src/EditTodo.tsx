import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, RouteProps } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";
import Edit from "./styles/EditTodo/Edit";

export const EditTodo = () => {
  const match = useRouteMatch<{ id: string }>();
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
    <Edit>
      <form onSubmit={handleSubmit}>
        <h1>Edit Todo</h1>

        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />

        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </Edit>
  ) : (
    <div>Loading</div>
  );
};
