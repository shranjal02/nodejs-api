const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// todo Routes
app.use(todoRoutes);
// user Routes
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
