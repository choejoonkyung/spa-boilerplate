import DetailView from "../../components/DetailView";
import request from "../../utils/Service";

function ProductDetailPage({ $target }) {
  const $page = document.createElement("article");
  $page.className = "product-detail-page";
  $page.innerHTML = "<h2>상품정보</h2>";

  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/posts/${productId}`);
  };

  this.render = () => {
    $target.appendChild($page);
  };

  fetchProducts();
}

export default ProductDetailPage;
