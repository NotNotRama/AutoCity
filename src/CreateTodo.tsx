import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";

export const CreateTodo = () => {
  const defaultTodos = [
    {
      _id: 1,
      text: "do the take home project",
      todo: true,
      inProgress: false,
      done: false,
      deleted: true,
    },
  ];
  const [items, setItems] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const history = useHistory();
  const [desc, setDesc] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://localhost:4000/");
      const todos = await res.json();
      setItems(todos);
    };
    fetchItems();
  }, []);

  const handleSubmit = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    await fetch("http://localhost:4000/create", {
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

  return (
    <div>
      <div>
        <h3>Add Todo</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Title</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <h1>Description</h1>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />

            <input type="submit" value="Submit" />
          </form>
          <h1>Deleted todos</h1>
          <div>
            {items
              .filter((todo) => todo.deleted)
              .map((todo) => (
                <ul>
                  <li>{todo.title}</li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
