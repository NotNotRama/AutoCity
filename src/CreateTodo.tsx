import React, { useState, useEffect } from "react";
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
  const [items, setItems] = useState<Todo[]>(defaultTodos);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      setItems(defaultTodos);
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
        text: name,
      }),
    });
    setName("");
  };

  return (
    <div>
      <div>
        <h3>Add Todo</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <input type="submit" value="Submit" />
          </form>
          <h1>Deleted todos</h1>
          <div>
            {items
              .filter((todo) => todo.deleted)
              .map((todo) => (
                <ul>
                  <li>{todo.text}</li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
