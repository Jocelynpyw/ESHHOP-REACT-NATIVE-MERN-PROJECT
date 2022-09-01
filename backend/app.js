const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helpers/jwt");

const PORT = process.env.PORT;

app.use(cors());
app.options("*", cors());

// Middlewares
app.use(bodyParser.json());
app.use(morgan("tiny"));
// app.use(authJwt);

// Routes
const ProductsRoutes = require("./routers/product.js");
const UsersRoutes = require("./routers/users.js");
const OrdersRoutes = require("./routers/orders.js");
const CategoriesRoutes = require("./routers/categories.js");

// Routers
app.use("/api/product", ProductsRoutes);
app.use("/api/user", UsersRoutes);
app.use("/api/order", OrdersRoutes);
app.use("/api/category", CategoriesRoutes);

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
