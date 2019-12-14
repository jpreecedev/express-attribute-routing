import { Request, Response } from "express";
import { routeParams } from "../routeParams";

class AnotherController {
  @routeParams(":id")
  index(req: Request, res: Response) {
    return res.send(`Hello from AnotherController, ${req.params.id}`);
  }
}

export { AnotherController };
