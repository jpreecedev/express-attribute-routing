import { Request, Response } from "express";
import { get } from "../routeParams";

class AnotherController {
  index(req: Request, res: Response) {
    return res.send(`Hello from index AnotherController, I have no params`);
  }

  @get(":id")
  emptyGetRoute(req: Request, res: Response) {
    return res.send(
      `Hello from emptyGetRoute AnotherController, I have an Id: ${req.params.id}`
    );
  }

  @get()
  defaultRoute(req: Request, res: Response) {
    return res.send(
      `Hello from defaultRoute AnotherController, I also have no params.  Comment out index to see me`
    );
  }

  iAmNotMappable(req: Request, res: Response) {
    return res.send(
      "This method should not have been called because I am not a valid HTTP Verb and I have no decorators"
    );
  }
}

export { AnotherController };
