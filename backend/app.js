const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const ProductsRouter = require("./routers/product");
require("dotenv/config");
const PORT = process.env.PORT;

// Middlewares
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Routers
app.use("/product", ProductsRouter);

mongoose
  .connect("mongodb://localhost:27017/myEshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Data Base connection is ready..."))
  .catch((err) => {
    console.error("Connextion Echec", err);
    process.exit(-1);
  });

app.listen(PORT, () => {
  console.log(`You server is running on port : http://localhost:${PORT}`);
});
