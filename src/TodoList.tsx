import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, RouteProps, Link } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";
import List from "./styles/TodoList/List";
import TodoCard from "./styles/TodoList/TodoCard";
import Icons from "./styles/TodoList/Icons";
import Title from "./styles/TodoList/Title";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

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
  const history = useHistory();

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

  const handleEdit = (id: number) => {
    history.push(`/edit/${id}`);
  };

  return (
    <List>
      <div>
        <Title titleColor="#03458C">Todo</Title>
        {items
          .filter((todo: Todo) => todo.todo)
          .map((todo: Todo) => (
            <TodoCard arrowColor="#E87A05">
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>

              <Icons arrowColor="#E87A05">
                <AiFillEdit onClick={() => handleEdit(todo._id)} />
                <AiFillDelete onClick={() => deleteTodo(todo._id)} />
                <RiSendPlaneFill onClick={() => toProgress(todo._id)} />
              </Icons>
            </TodoCard>
          ))}
      </div>
      <div>
        <Title titleColor="#E87A05">In Progress</Title>
        {items
          .filter((todo: Todo) => todo.inProgress)
          .map((todo: Todo) => (
            <TodoCard arrowColor="#008727" deleteColor="red" editColor="grey">
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <Icons arrowColor="#008727">
                <AiFillEdit onClick={() => handleEdit(todo._id)} />
                <AiFillDelete onClick={() => deleteTodo(todo._id)} />
                <RiSendPlaneFill onClick={() => completeTodo(todo._id)} />
              </Icons>
            </TodoCard>
          ))}
      </div>
      <div>
        <Title titleColor="#008727">Done</Title>
        {items
          .filter((todo: Todo) => todo.done)
          .map((todo: Todo) => (
            <TodoCard>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <Icons>
                <AiFillEdit onClick={() => handleEdit(todo._id)} />
                <AiFillDelete onClick={() => deleteTodo(todo._id)} />
              </Icons>
            </TodoCard>
          ))}
      </div>
    </List>
  );
};
