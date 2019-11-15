import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";

import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["brito"] }));
app.use(AppRouter.getIntance());

app.listen(3000, () => {
  console.log("runnning on port 3000");
});
