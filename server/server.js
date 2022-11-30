import express from "express";
import connect from "./database/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";
import Transaction from "./models/Transaction.js";
import TransactionsAPI from "./routes/TransactionsAPI.js";
import AuthApi from "./routes/AuthApi.js";
import * as dotenv from "dotenv";
import passport from "passport";
import passportConfig from "./config/passport.js";
dotenv.config();

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

await connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/transaction", TransactionsAPI);
app.use("/auth", AuthApi);

app.listen(PORT, () => {
  console.log("Server is running at PORT 4000");
});
