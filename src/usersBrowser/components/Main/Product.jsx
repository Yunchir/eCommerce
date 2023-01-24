import "../../style/main/Product.css";
import cart from "../../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";

export default function Product(prop) {
  const navigate = useNavigate();
  function Page() {
    navigate(`/page/${prop.id}`);
  }
  console.log(prop);
  return (
    <div className="product" onClick={Page}>
      <img src={prop.img} alt="" />
      <div className="productContent">
        <h5 className="productTitle">{prop.name}</h5>
        <p className="productName">{prop.category}</p>
        <p className="productPrice">${prop.price}</p>
        <button className="productCart">
          <img src={cart} alt="" />
        </button>
      </div>
    </div>
  );
}
