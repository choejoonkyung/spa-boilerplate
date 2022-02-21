import ProductList from "../../components/Product/ProductList";
import request from "../../utils/Service";

function ProductListPage({ $target }) {
  const $page = document.createElement("article");
  $page.className = "product-list-page";
  $page.innerHTML = "<h2>상품리스트</h2>";

  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  const fetchProducts = async () => {
    const products = await request("/posts");

    new ProductList({
      $target: $page,
      initialState: products,
    });
  };

  this.render = () => {
    $target.appendChild($page);
  };

  fetchProducts();
}

export default ProductListPage;
