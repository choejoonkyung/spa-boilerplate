import ProductList from "../../components/Product/ProductList";

function ProductListPage({ $target }) {
  const $page = document.createElement("article");
  $page.className = "product-list-page";
  $page.innerHTML = "<h2>상품리스트</h2>";

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    $target.appendChild($page);
  };
}

export default ProductListPage;
