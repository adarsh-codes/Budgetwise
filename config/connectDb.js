const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://adarshksingh14:adarsh@cluster0.cd8ywny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
