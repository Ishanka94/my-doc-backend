const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const connections = require('./config/db-connect');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const routes = require('./routes/index');
app.use('/api', routes);
// app.use(require("./routes/form"));
// get driver connection
// const dbo = require("./src/db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);

  // });
  console.log(`Server is running on port: ${port}`);
});
