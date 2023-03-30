import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../App";
import "../../style/main/productPage.css";

export default function ProductCard() {
  const { data } = useContext(DataContext);
  const test = useParams();
  let dat = data && data.filter((hoho) => hoho.id === test.id);
  const [count, setCount] = useState(0);
  console.log("stock", dat && dat[0].stock);

  // let oneProduct = data && data.filter((prop) => prop.id === test.id);
  // function add() {
  //   if (count < oneProduct[0].stock) {
  //     let proDet =
  //       data &&
  //       data.filter((prop) => {
  //         prop.id === test.id;
  //       });
  //   }
  // }

  function plus() {
    if (dat[0].stock > count) {
      setCount(count + 1);
    }
  }

  function minus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function addBasket() {
    let baskets = [];
    setCount(0);

    if (localStorage.getItem("baskets")) {
      baskets = JSON.parse(localStorage.getItem("baskets"));
      const findData = baskets.find((product) => product.id === dat[0].id);
      if (findData) {
        baskets[baskets.indexOf(findData)].stock =
          baskets[baskets.indexOf(findData)].stock + count;
        baskets = [...baskets];
      } else {
        baskets = [...baskets, { id: dat[0].id, stock: count }];
      }
    } else {
      baskets = [...baskets, { id: dat[0].id, stock: count }];
    }
    console.log("check", baskets);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  }
  console.log("count", count);

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
                Hurry up! only {dat && dat[0].stock} product left in stock
              </span>
              <span className="proColor">
                <p>Color:</p>
                <div className="proColors">
                  <div className="proColorNeon"></div>
                  <div className="procolorBlue"></div>
                </div>
              </span>
              <div className="proQuantity">
                <span>Quantity:</span>
                <div className="proQuantityBtn">
                  <div>
                    <button className="count" onClick={minus}>
                      -
                    </button>
                  </div>
                  <button className="numCount">{count}</button>
                  <div>
                    <button className="count" onClick={plus}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="proAddBuy">
                <button className="proAddCatd" onClick={addBasket}>
                  Add to card
                </button>

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
