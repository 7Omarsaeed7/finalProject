const express = require("express");
const app = express();
const databaseConnection = require("./database/connect");
const products = require("./routes/proucts");

async function startApp() {
  try {
    await databaseConnection();
    app.use(express.json());
    app.use("/products", products);
  } catch (error) {
    console.log("Failed to connect to db");
  }
}
startApp();
