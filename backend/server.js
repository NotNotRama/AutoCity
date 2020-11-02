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
    text: req.body.text,
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

// app.post('/create', (req, res) => {
//   console.log('req', req);
//   const todo = new Todo({
//     text: req.body.text,
//     todo: true,
//     inProgress: false,
//     done: false,
//     deleted: false,
//   });

//   todo
//     .save()
//     .then((todo) => {
//       res.json(todo);
//     })
//     .catch((err) => {
//       res.status(500).send(err.message);
//     });
// });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
