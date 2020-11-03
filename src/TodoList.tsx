import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";
import List from "./styles/TodoList/List";
import TodoCard from "./styles/TodoList/TodoCard";
import Title from "./styles/TodoList/Title";
import { AiFillDelete } from "react-icons/ai";

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
  const completeTodo = async (id: number) => {
    const res = await fetch(`http://localhost:4000/completeTodo/${id}`, {
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
    <List>
      <div>
        <Title>Todo</Title>
        {items
          .filter((todo: Todo) => todo.todo)
          .map((todo: Todo) => (
            <TodoCard>
              <div>{todo.title}</div>
              <div>{todo.description}</div>

              <button onClick={() => toProgress(todo._id)}>Send to Progress</button>
              <button onClick={() => deleteTodo(todo._id)}>Delete Button</button>

              <Link to={`/edit/${todo._id}`}>Edit</Link>
            </TodoCard>
          ))}
      </div>
      <div>
        <Title>In Progress</Title>
        {items
          .filter((todo: Todo) => todo.inProgress)
          .map((todo: Todo) => (
            <TodoCard>
              <div>{todo.title}</div>
              <div>{todo.description}</div>
              <button onClick={() => completeTodo(todo._id)}>Send to Done</button>
              <button onClick={() => deleteTodo(todo._id)}>Delete Button</button>
              <Link to={`/edit/${todo._id}`}>Edit</Link>

              <AiFillDelete />
            </TodoCard>
          ))}
      </div>
      <div>
        <Title>Done</Title>
        {items
          .filter((todo: Todo) => todo.done)
          .map((todo: Todo) => (
            <TodoCard>
              <div>{todo.title}</div>
              <div>{todo.description}</div>

              <button onClick={() => deleteTodo(todo._id)}>Delete Button</button>
              <Link to={`/edit/${todo._id}`}>Edit</Link>
            </TodoCard>
          ))}
      </div>
    </List>
  );
};
