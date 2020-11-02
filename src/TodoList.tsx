import React, { useState, useEffect } from 'react';
import { Todo } from './Types/TodoTypes';

export const TodoList = () => {
  const defaultTodos = [
    {
      text: 'do the take home project',
      todo: true,
      inProgress: false,
      done: false,
      deleted: false,
    },
    {
      text: 'upload it to github',
      todo: false,
      inProgress: true,
      done: false,
      deleted: false,
    },
  ];

  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      setItems(defaultTodos);
    };
    fetchItems();
  }, []);

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
                <div>{todo.text}</div>

                <button>In Progress Button</button>
              </div>
            ))}
        </div>
        <div>
          <h1>In Progress</h1>
          {items
            .filter((todo: Todo) => todo.inProgress)
            .map((todo: Todo) => (
              <div>
                <div>{todo.text}</div>

                <button>Delete Button</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
