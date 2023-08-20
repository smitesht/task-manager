const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/taskmanager";

const connectDB = async (url) => {
  await mongoose
    .connect(connectionString)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
