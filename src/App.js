import Router from "./utils/Router";
import AlbumPage from "./pages/AlbumPage";

const router = new Router();

class App {
  constructor($rootEle) {
    router.setRouteChangeEvent(() => this.route($rootEle));
    this.route($rootEle);
  }

  route = ($rootEle) => {
    const { pathname } = location;
    $rootEle.innerHTML = "";

    const btn = document.createElement("button");
    btn.innerHTML = "앨범페이지";
    btn.onclick = () => router.push("/album");
    $rootEle.appendChild(btn);

    if (pathname.includes("/album")) {
      new AlbumPage({ $target: $rootEle });
    }
  };
}

export default App;
