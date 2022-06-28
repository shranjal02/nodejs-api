const axios = require("axios");

module.exports.getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userData = response.data;

    // fetching todos
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const todos = resp.data.filter((todo) => todo.userId === userData.id);

    res.status(201).json({ ...userData, todos });
  } catch (err) {
    res.status(400).json({ error: "Something went wrong" });
  }
};
