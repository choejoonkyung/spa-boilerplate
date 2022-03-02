import Router from "./utils/Router";

const router = new Router();

function App(rootEle) {
  const move = () => {
    router.push("/move");
  };

  const back = () => {
    router.back();
  };

  const btn = document.createElement("button");
  btn.onclick = move;
  btn.innerHTML = "이동";
  rootEle.appendChild(btn);

  const btn2 = document.createElement("button");
  btn2.onclick = back;
  btn2.innerHTML = "뒤로";
  rootEle.appendChild(btn2);
}

export default App;
