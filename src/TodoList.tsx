import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";

export const TodoList = () => {
  const defaultTodos = [
    {
      _id: 1,
      text: "do the take home project",
      todo: true,
      inProgress: false,
      done: false,
      deleted: false,
    },
    {
      _id: 2,
      text: "upload it to github",
      todo: false,
      inProgress: true,
      done: false,
      deleted: false,
    },
  ];

  const [items, setItems] = useState<Todo[]>([]);
  console.log("items", items);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://localhost:4000/");
      const todos = await res.json();
      setItems(todos);
    };
    fetchItems();
  }, []);

  const toProgress = async (id: number) => {
    const res = await fetch(`http://localhost:4000/toProgress/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    const todos = await res.json();
    setItems(todos);
  };
  const deleteTodo = async (id: number) => {
    const res = await fetch(`http://localhost:4000/deleteTodo/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    const todos = await res.json();
    setItems(todos);
  };

  return (
    <div>
      <div>
        <h3>Todo List</h3>

        <div>
          <h1>Todo</h1>
          {items
            .filter((todo: Todo) => todo.todo)
            .map((todo: Todo) => (
              <div>
                <div>{todo.title}</div>
                <div>{todo.description}</div>

                <button onClick={() => toProgress(todo._id)}>Send to Progress</button>
                <Link to={`/edit/${todo._id}`}>Edit</Link>
              </div>
            ))}
        </div>
        <div>
          <h1>In Progress</h1>
          {items
            .filter((todo: Todo) => todo.inProgress)
            .map((todo: Todo) => (
              <div>
                <div>{todo.title}</div>
                <div>{todo.description}</div>

                <button onClick={() => deleteTodo(todo._id)}>Delete Button</button>
                <Link to={`/edit/${todo._id}`}>Edit</Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
