const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

const setRouteChangeEvent = (onRouteChange) => {
  window.addEventListener("popstate", onRouteChange);

  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const push = (url, params) => {
  console.log("push");
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export const replace = (url, params) => {
  console.log("replace");
  history.replaceState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export const back = (params) => {
  console.log("back");
  history.back();
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export default setRouteChangeEvent;
