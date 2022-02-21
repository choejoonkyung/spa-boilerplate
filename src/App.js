import ProductListPage from "./pages/ProductListPage";
import setRouteChangeEvent from "./utils/Router";
import "./global.css";

function App($rootEle) {
  this.route = () => {
    const { pathname } = location;
    $rootEle.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target: $rootEle }).render();
    }

    if (pathname === "/test") {
      console.log("test path");
    }
  };

  setRouteChangeEvent(this.route);
  this.route();
}

export default App;
