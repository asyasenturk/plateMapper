const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
const errorHandler = require("./middlewares/error");
const MONGO_URI =
  "mongodb+srv://asyasenturk:12345@asya.k5i1t.mongodb.net/";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const platesRoute = require("./routes/plates");
const uploadRoute = require("./routes/upload");
const cityRoute = require("./routes/city")
// const authRoute = require("./routes/auth");
// app use kısmı

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/city", cityRoute);
app.use("/plates", platesRoute);
// app.use('/auth',authRoute)

app.use(errorHandler);

app.use("*", (req, res, next) => {
  res.status(404).json("Bulunamadı");
});
const PORT = 8585;

app.listen(PORT, () => {
  console.log(`Sunucu şu portta çalışıyor : ${PORT}`);
});
