import ImgOptimaize from "../../components/utils/ImgOptimaize";
import Client from "../../utils/Client";
import "./style.css";

const client = new Client();
const instance = client.getInstance();

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
    this._getPosts();
  }

  setState = (nextState) => {
    this.state = nextState;
  };

  _getPosts = async () => {
    const { data } = await instance.get("/posts");
    console.log(data);
  };

  render = () => {};
}

export default AlbumPage;
