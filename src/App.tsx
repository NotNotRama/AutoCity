import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { EditTodo } from "./EditTodo";
import Navbar from "./styles/Navbar/Navbar";
import LinksTodo from "./styles/Navbar/LinksTodo";

function App() {
  return (
    <div>
      <Navbar>
        <LinksTodo>
          <Link to="/">Todos</Link>

          <Link to="/create">Create Todo</Link>
        </LinksTodo>
        <h1>Auto City</h1>
      </Navbar>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
