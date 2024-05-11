const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 4000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, welcome to my First Express server");
});

app.listen(port , () => {
    console.log(`Server is Running on port ${port}`);
})
