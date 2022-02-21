import { push } from "../../utils/Router";
import "./style.css";

function ProductList({ $target, initialState }) {
  const $wrapper = document.createElement("section");
  $wrapper.className = "product-list-wrapper";
  $wrapper.innerHTML = "<h3 class=hidden-heading>상품 목록</h3>";

  const $ul = document.createElement("ul");
  $ul.className = "product-list";

  $wrapper.appendChild($ul);
  $target.appendChild($wrapper);

  this.state = initialState;
  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    $ul.innerHTML = `
      ${this.state
        .map(
          (product) =>
            `
          <li class="product-wrapper" data-id=${product.id}>
            <div class="product">
              <h3>${product.title}</h3>
              <p>${product.body}~</p>
            </div>
          </li>
        `
        )
        .join("")}`;
  };

  this.eventListener = () => {
    const click = (e) => {
      const $li = e.target.closest("li");
      const { id } = $li.dataset;

      if (id) {
        push(`/products/${id}`);
        $ul.removeEventListener("click", click);
      }
    };

    $ul.addEventListener("click", click);
  };

  this.eventListener();
  this.render();
}

export default ProductList;
