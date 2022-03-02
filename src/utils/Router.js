const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

class Router {
  constructor() {}

  setRouteChangeEvent = (onRouteChange) => {
    window.addEventListener("popstate", onRouteChange);
    window.addEventListener(ROUTE_CHANGE_EVENT, onRouteChange);
  };

  push = (url, params) => {
    history.pushState(null, null, url);
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
  };

  replace = (url, params) => {
    history.replaceState(null, null, url);
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
  };

  back = (params) => {
    history.back();
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
  };
}

export default Router;
