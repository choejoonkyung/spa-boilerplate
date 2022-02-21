function DetailView({ $target, initialState }) {
  const $wrapper = document.createElement("section");
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

  this.render();
}

export default DetailView;
