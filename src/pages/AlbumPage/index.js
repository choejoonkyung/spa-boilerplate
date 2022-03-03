import "./style.css";

class AlbumPage {
  constructor({ $target }) {
    const $page = document.createElement("article");
    $page.className = "image-list-page";
    $page.innerHTML = "<h2>사진목록</h2>";
    $target.appendChild($page);

    this.render();
  }

  setState = (nextState) => {
    this.state = nextState;
  };

  render = () => {};
}

export default AlbumPage;
