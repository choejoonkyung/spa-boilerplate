import { back } from "../../utils/Router";

function DetailView({ $target, product }) {
  const $wrapper = document.createElement("section");
  $target.appendChild($wrapper);

  this.state = product;

  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      $wrapper.innerHTML = `
      ${`
        <p>loading</p>
        `}`;
    } else {
      $wrapper.innerHTML = `
        ${`
          <button>뒤로가기</button>
          <div class="product">
                <h3>${product.title}</h3>
                <p>${product.body}~</p>
          </div>
          `}`;
    }
  };

  this.eventListener = () => {
    const click = (e) => {
      const $button = e.target.closest("button");

      if ($button) {
        back();
        $wrapper.removeEventListener("click", click);
      }
    };

    $wrapper.addEventListener("click", click);
  };

  this.eventListener();
  this.render();
}

export default DetailView;
