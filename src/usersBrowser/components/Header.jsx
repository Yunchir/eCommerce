import "../style/Header.css";
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import cart from "../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header(prop) {
  const { setSign } = prop;
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  function search() {
    console.log(val);
    if (val === "") {
      console.log("no");
    } else {
      navigate(`/search/${val}`);
    }
  }
  return (
    <div className="header">
      <div className="headerContent">
        <img src={logo} className="logo" alt="" />
        <div className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="Search any things"
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="searchBtn" onClick={search}>
            Search
          </button>
        </div>
        <div className="profile">
          {/* <button className="signIn" onClick={() => setSign(true)}>
            <img src={user} alt="" /> Sign in
          </button> */}
          <div className="sign">
            <img src={user} alt="" />
            <input
              type="button"
              value={"Sign in"}
              className="signIn"
              onClick={() => setSign(true)}
            />
          </div>

          <button className="cart">
            <img src={cart} alt="" />
            <div className="number">0</div>
          </button>
        </div>
      </div>
    </div>
  );
}
