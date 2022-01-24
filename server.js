import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./userRoutes.js";
const app = express();
app.use(userRoutes);
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));)

const CONNECTION_URL =
  "mongodb+srv://UtkarshNagar:utkarsh1234@cluster0.cyc47.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server R