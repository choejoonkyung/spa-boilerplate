const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

const setRouteChangeEvent = (onRouteChange) => {
  window.addEventListener("popstate", onRouteChange);
  window.addEventListener(ROUTE_CHANGE_EVENT, onRouteChange);
};

export const push = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export const replace = (url, params) => {
  history.replaceState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export const back = (params) => {
  history.back();
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export default setRouteChangeEvent;
