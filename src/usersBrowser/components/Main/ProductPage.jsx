import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../App";
import "../../style/main/productPage.css";

export default function ProductCard() {
  const { data } = useContext(DataContext);
  const test = useParams();
  let dat = data && data.filter((hoho) => hoho.id === test.id);
  return (
    data && (
      <div>
        <div>
          <div className="proAdd">
            <div className="proAdd-img">
              <img src={dat[0].image} alt="" />
            </div>
            <div className="proinfo">
              <h3>{dat[0].name}</h3>
              <p>${dat[0].price}</p>
              <p>
                {dat[0].category}: <span className="inStock">In stock</span>
              </p>
              <span className="hurryUp">
                Hurry up! only 34 product left in stock
              </span>
              <span className="proColor">
                <p>Color:</p>
                <div className="proColors">
                  <div className="proColorNeon"></div>
                  <div className="procolorBlue"></div>
                </div>
              </span>
              <div className="proSize">
                <span>Size:</span>
                <button>23</button>
                <button>34</button>
                <button>13</button>
                <button>24</button>
              </div>
              <div className="proQuantity">
                <span>Quantity:</span>
                <div className="proQuantityBtn">
                  <button className="proMinusBtn">-</button>
                  <button>1</button>
                  <button className="proPlusBtn">+</button>
                </div>
              </div>
              <div className="proAddBuy">
                <button className="proAddCatd">Add to catd</button>

                <button className="proBuy">Buy it now</button>
              </div>
              <p>{data[0].description}</p>
              {/* <p>{dat[0].spec}</p> */}
              <div className="proprice"></div>
              <a href="../User.jsx">back</a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
