import "../../style/main/Navbar.css";
import { useState } from "react";
import Product from "./Product";
import { data } from "../../../util/data";

export default function Navbar() {
  const [Input, setInput] = useState(data);
  function filter(e) {
    if (e.target.innerText === "All") {
      setInput(data);
    } else {
      let distinguish = data.filter(
        (product) => product.category === e.target.innerText
      );
      setInput(distinguish);
    }
  }
  return (
    <div className="navbar container">
      <h4 className="navbarTitle">Popular products</h4>
      <ul className="navbarList">
        <li className="navbarItem ">
          <button className="select" onClick={filter}>
            All
          </button>
        </li>
        <li className="navbarItem">
          <button onClick={filter}>laptop</button>
        </li>
        <li className="navbarItem">
          <button onClick={filter}>computers & tablets</button>
        </li>
        <li className="navbarItem">
          <button onClick={filter}>appliances</button>
        </li>
        <li className="navbarItem">
          <button onClick={filter}>telescope</button>
        </li>
        <li className="navbarItem">
          <button onClick={filter}>gaming console</button>
        </li>
      </ul>

      {Input.map((pro) => (
        <Product
          id={pro.id}
          name={pro.name}
          title={pro.description}
          category={pro.category}
          price={pro.price}
          img={pro.image}
        />
      ))}
    </div>
  );
}
