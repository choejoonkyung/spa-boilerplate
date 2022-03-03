import Router from "./utils/Router";
import Storage from "./utils/Storage";

const router = new Router();
const storage = new Storage();

function App(rootEle) {
  const move = () => {
    router.push("/move");
  };

  const back = () => {
    router.back();
  };

  const storageStr = () => {
    storage.set("key", "저장되었습니다!");
  };

  const removeStr = () => {
    storage.remove("key");
  };

  const btn = document.createElement("button");
  btn.onclick = move;
  btn.innerHTML = "이동";
  rootEle.appendChild(btn);

  const btn2 = document.createElement("button");
  btn2.onclick = back;
  btn2.innerHTML = "뒤로";
  rootEle.appendChild(btn2);

  const btn3 = document.createElement("button");
  btn3.onclick = storageStr;
  btn3.innerHTML = "저장";
  rootEle.appendChild(btn3);

  const btn4 = document.createElement("button");
  btn4.onclick = removeStr;
  btn4.innerHTML = "삭제";
  rootEle.appendChild(btn4);

  const view = document.createElement("p");
  view.innerHTML = storage.get("key");
  rootEle.appendChild(view);
}

export default App;
