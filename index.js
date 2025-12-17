import express from "express";
import { connection } from "./Database/db.js";
import { router } from "./Database/route/customerRoute.js";

const app = express();
const port = process.env.PORT || 5000;

connection();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/customer", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
