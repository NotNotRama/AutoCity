import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Todo } from "./Types/TodoTypes";
import CreateTodoDiv from "./styles/CreateTodo/CreateTodoDiv";
import NewTask from "./styles/CreateTodo/NewTask";
import DeletedTodos from "./styles/CreateTodo/DeletedTodos";
import Line from "./styles/CreateTodo/Line";
import Edit from "./styles/EditTodo/Edit";

export const CreateTodo = () => {
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
    <CreateTodoDiv>
      <Edit>
        <form onSubmit={handleSubmit}>
          <h1>New Task</h1>

          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </Edit>
      <Line />
      <DeletedTodos>
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
      </DeletedTodos>
    </CreateTodoDiv>
  );
};
