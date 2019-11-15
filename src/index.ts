import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";

import "./controllers/LoginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["brito"] }));
app.use(router);
app.use(AppRouter.getIntance());

app.listen(3000, () => {
  console.log("runnning on port 3000");
});
