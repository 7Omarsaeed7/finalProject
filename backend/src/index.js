const express = require("express");
const app = express();
const databaseConnection = require("./database/connect");
const products = require("./routes/products");
const PORT = process.env.PORT || 3500;
async function startApp() {
  try {
    await databaseConnection();
    app.use(express.json());
    app.use("/products", products);
    app.listen(PORT, () => {
      console.log(`Started listening to port: ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to connect to db");
    process.exit(1);
  }
}
startApp();
