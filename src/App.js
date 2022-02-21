import ProductListPage from "./pages/ProductListPage";
import setRouteChangeEvent from "./utils/Router";
import "./global.css";
import ProductDetailPage from "./pages/ProductDetailPage";

function App($rootEle) {
  this.route = () => {
    const { pathname } = location;
    $rootEle.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target: $rootEle }).render();
    }

    if (pathname === "/products/") {
      new ProductDetailPage({ $target: $rootEle }).render();
    }
  };

  setRouteChangeEvent(this.route);
  this.route();
}

export default App;
