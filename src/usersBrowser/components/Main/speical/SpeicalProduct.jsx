import "../../../style/main/speical/speicalProduct.css";
import cart from "../../../img/shopping-cart.svg";
import { useContext } from "react";
import { DataContext } from "../../../../App";
export default function SpeicalProduct() {
  const { data } = useContext(DataContext);
  return (
    <div className="speicalProduct">
      <div className="SProductImg">
        <img src={data && data[1].image} alt="" />
      </div>
      <div className="SProductContent">
        <h2>{data && data[1].name}</h2>
        <p>{data && data[1].description}</p>
        <p>${data && data[1].price}</p>
        <button>
          Add to cart <img src={cart} alt="" />
        </button>
      </div>
    </div>
  );
}
