const axios = require("axios");

module.exports.getTodos = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = response.data;

    // removing userId from all objects
    const updatedTodos = todos.map((todo) => {
      delete todo.userId;
      return todo;
    });

    res.status(201).json(updatedTodos);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong" });
  }
};
