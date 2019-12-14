import { Request, Response } from "express";

class AnotherController {
  index(req: Request, res: Response) {
    return res.send("Hello from AnotherController");
  }
}

export { AnotherController };
