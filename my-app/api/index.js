`use StrictMode`;
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const StrictMode = require("react");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const productCart = require("./routes/cart");
const orderRoutes = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();
//express server
const app = express();
app.listen(process.env.PORT || 8888, () => {
  console.log("backend is up");
}); 
//private mogodb key
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connecting database........DONE");
  })
  .catch((err) => {
    console.log("connecting database......Failed");
    console.log(err);
  });
app.use(cors());
app.use(express.json());
//rest api
app.use("/api/auth", authRoutes); // will use authRoutes
app.use("/api/users", userRoutes); // will use userRoutes
app.use("/api/product", productRoutes); // will use userRoutes
app.use("/api/cart", productCart); // will use userRoutes
app.use("/api/order", orderRoutes); // will use userRoutes
app.use("/api/checkout", stripeRoute); // will use userRoutes
