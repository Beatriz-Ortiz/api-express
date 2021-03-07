const express = require("express");
const mongoose = require("mongoose");

// Connection to mongoDB
mongoose
  .connect("mongodb://localhost/backend")
  .then((db) => console.log("Connected to DB"))
  .catch((err) => console.log("Error DB connection"));

const app = express();
const routes = require("./routes");

// Settings
app.set("port", 4500);

//Middleware
app.use(express.json());

// Routes
app.use("/", routes.users);

// Statics file
// TODO

// Listen port
app.listen(app.get("port"), () => {
  console.log("Server on port: ", app.get("port"));
});
