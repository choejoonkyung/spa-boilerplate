import DetailView from "../../components/DetailView";
import request from "../../utils/Service";

function ProductDetailPage({ $target }) {
  const $page = document.createElement("article");
  $page.className = "product-detail-page";
  $page.innerHTML = "<h2>상품정보</h2>";

  const { pathname } = location;
  const [, , id] = pathname.split("/");

  this.state = {
    id,
    product: null,
  };

  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  this.fetchProduct = async () => {
    const { id: postId } = this.state;
    const product = await request(`/posts/${postId}`);
    const detailView = new DetailView({
      $target: $page,
      product: product,
    });
  };

  this.render = () => {
    $target.appendChild($page);
  };

  this.fetchProduct();
}

export default ProductDetailPage;
