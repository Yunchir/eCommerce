import { React, useContext } from "react";
import Slide from "./Main/Slide";
import "../style/Main.css";
import Product from "./Main/Product";
import Navbar from "./Main/Navbar";
import Ads from "./Main/Ads";
import Speical from "./Main/Speical";
import { DataContext } from "../../App";

export default function Main() {
  const { data, setData } = useContext(DataContext);
  return (
    <div className="main">
      <Slide />
      <div className="container">
        <Navbar />
        {/* <Product data={data} /> */}
        <Ads />
        <Speical data={data} />
      </div>
    </div>
  );
}
