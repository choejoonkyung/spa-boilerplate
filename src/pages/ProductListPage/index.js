import ProductList from "../../components/Product/ProductList";
import request from "../../utils/Service";

function ProductListPage({ $target }) {
  const $page = document.createElement("article");
  $page.className = "product-list-page";
  $page.innerHTML = "<h2>상품리스트</h2>";

  new ProductList({
    $target: $page,
    list: this.state,
  });

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.fetchProducts = async () => {
    const products = await request("/posts");
    this.setState(products);
  };

  this.render = () => {
    $target.appendChild($page);
  };

  this.fetchProducts();
}

export default ProductListPage;
