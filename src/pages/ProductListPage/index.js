import ProductList from "../../components/Product/ProductList";
import request from "../../utils/Service";

function ProductListPage({ $target }) {
  const $page = document.createElement("article");
  $page.className = "product-list-page";
  $page.innerHTML = "<h2>상품리스트</h2>";

  const productlist = new ProductList({
    $target: $page,
    initialState: this.state,
  });

  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  this.fetchProducts = async () => {
    const products = await request("/posts");
    productlist.setState(products);
  };

  this.render = () => {
    $target.appendChild($page);
  };

  this.fetchProducts();
}

export default ProductListPage;
