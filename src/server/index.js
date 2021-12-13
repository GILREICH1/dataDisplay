const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static("dist"));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
