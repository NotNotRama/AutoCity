const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

mongoose.connect("mongodb+srv://Raider:utn1436764@cluster0.lkvgp.mongodb.net/todos?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.post("/create", (req, res) => {
  console.log(req);
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.title = req.body.title;
      todo.description = req.body.description;

      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.post("/toProgress/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  await Todo.findByIdAndUpdate(req.params.id, {
    todo: false,
    inProgress: true,
    done: false,
    deleted: false,
  });

  const todos = await Todo.find();
  res.json(todos);
});
app.post("/completeTodo/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  await Todo.findByIdAndUpdate(req.params.id, {
    todo: false,
    inProgress: false,
    done: true,
    deleted: false,
  });

  const todos = await Todo.find();
  res.json(todos);
});

app.post("/deleteTodo/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  await Todo.findByIdAndUpdate(req.params.id, {
    todo: false,
    inProgress: false,
    done: false,
    deleted: true,
  });

  const todos = await Todo.find();
  res.json(todos);
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
