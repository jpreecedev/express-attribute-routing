import * as express from "express";
import { join } from "path";
import { loadRoutesFromControllers } from "./controllerLoader";

const app = express();

const routers = loadRoutesFromControllers(join(__dirname, "controllers"));
app.use(routers);

app.listen(8080, () => {
  console.log(`Server started at http://localhost:${8080}`);
});
