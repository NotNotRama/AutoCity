const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://Raider:utn1436764@cluster0.lkvgp.mongodb.net/todos?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
  console.log('Mongodb connection established successfully');
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
