import { Request, Response } from "express";

class HomeController {
  index(req: Request, res: Response) {
    return res.send("Hello from HomeController");
  }
  delete(req: Request, res: Response) {
    return res.sendStatus(204);
  }
}

export { HomeController };
