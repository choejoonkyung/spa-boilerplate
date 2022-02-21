import setRouteChangeEvent, { back, push, replace } from "./utils/Router";

function App($rootEle) {
  this.route = () => {
    const { pathname } = location;
    $rootEle.innerHTML = "<button>상품 목록</button>";

    const click = (e) => {
      back();
      $rootEle.removeEventListener("click", click);
    };

    $rootEle.addEventListener("click", click);

    if (pathname === "/") {
      console.log("/ path");
      return;
    }

    if (pathname === "/test") {
      console.log("test path");
      return;
    }
  };

  setRouteChangeEvent(this.route);
  this.route();
}

export default App;
