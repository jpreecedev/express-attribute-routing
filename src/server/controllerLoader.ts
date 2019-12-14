import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { Router } from "express";

import { PermittedVerbs } from "./permittedVerbs";

function getNamespace(name: string) {
  if (name === "Home") {
    return "";
  }
  return name;
}

function loadRoutesFromControllers(path: string) {
  if (!existsSync(path)) {
    return;
  }

  const result = [];

  const controllers = readdirSync(path);
  controllers.forEach(controller => {
    const instance = require(join(path, controller));

    const controllerName = `${controller
      .substr(0, 1)
      .toUpperCase()}${controller.substr(1, controller.indexOf(".") - 1)}`;

    const router = Router();
    const namespace = getNamespace(controllerName.replace("Controller", ""));

    const methods = Object.keys(PermittedVerbs).filter(verb =>
      Object.keys(instance[controllerName].prototype).includes(verb)
    );

    methods.forEach(method => {
      router[PermittedVerbs[method]](
        `/${namespace}`,
        instance[controllerName].prototype[method]
      );
    });

    result.push(router);
  });

  return result;
}

export { loadRoutesFromControllers };
