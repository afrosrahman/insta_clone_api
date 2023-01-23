const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes.js");
const CONNECTION_URL = require("./conn");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port :${PORT}`));
mongoose.connect("mongodb+srv://afros:afros@cluster0.edzmyrz.mongodb.net/post1", () => console.log("database connected"));
// mongoose
//     .connect("mongodb+srv://afros:rahman@cluster0.edzmyrz.mongodb.net/post", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Database connected Succesfully"))
//     .catch((error) => console.log(error.message));
