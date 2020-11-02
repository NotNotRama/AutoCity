import React, { useState, useEffect } from 'react';
import { Todo } from './Types/TodoTypes';

export const CreateTodo = () => {
  const defaultTodos = [
    {
      text: 'do the take home project',
      todo: true,
      inProgress: false,
      done: false,
      deleted: true,
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
          <div>
            <div>
              <div>Text</div>
              <div>Action</div>
            </div>
          </div>
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
