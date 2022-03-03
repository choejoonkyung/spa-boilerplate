import ImgOptimaize from "../../components/utils/ImgOptimaize";
import "./style.css";

class AlbumPage {
  constructor({ $target }) {
    const $page = document.createElement("article");
    $page.className = "image-list-page";
    $page.innerHTML = "<h2>사진목록</h2>";
    $target.appendChild($page);

    const $img = document.createElement("img");
    $img.dataset.src = "https://via.placeholder.com/150/f66b97";
    new ImgOptimaize({ $target: $img });
    $target.appendChild($img);

    this.render();
  }

  setState = (nextState) => {
    this.state = nextState;
  };

  render = () => {};
}

export default AlbumPage;
