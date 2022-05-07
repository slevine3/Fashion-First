const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");



app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});


