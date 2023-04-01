const express = require("express");
const app = express();
const port = 9696;

app.use(express.json());

app.use("/", require("./src/routes"));

app.listen(port, () => console.log(`Server has started on port: ${port}`));
