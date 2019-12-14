function routeParams(value: string) {
  return function(target: Object, propertyKey: string) {
    target[propertyKey]._routeParams = value;
  };
}

export { routeParams };
