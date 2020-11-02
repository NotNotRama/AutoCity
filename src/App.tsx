import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/create">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
