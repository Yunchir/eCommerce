import "../style/Header.css";
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OrderOffcan from "./Main/OrderOffcan";

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

          <div className="cart">
            <OrderOffcan />
            <div className="number">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
