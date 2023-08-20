const express = require("express");
const app = express();
const taskRouter = require("./router/taskRouter");
const dbConnection = require("./db/dbConnection");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8181;

app.use("/api/v1/task", taskRouter);

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`Server started listening at port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
