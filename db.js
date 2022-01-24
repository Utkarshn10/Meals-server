import mongoose from "mongoose";

const mongoose = require("mongoose");

const url =
  "mongodb+srv://UtkarshNagar:utkarsh1234@cluster0.cyc47.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
