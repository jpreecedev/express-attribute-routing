function get(value: string = undefined) {
  return function(target: Object, propertyKey: string) {
    target[propertyKey]._verb = "get";
    target[propertyKey]._routeParams = value;
  };
}

export { get };
