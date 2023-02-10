import { useContext } from "react";
import { DataContext } from "../../../App";
import "../../style/main/Slide.css";
export default function Slide() {
  const { data } = useContext(DataContext);
  // console.log(data[0].image);
  return (
    <div className="slide">
      <div className="container slide">
        <div className="slideContent">
          <h2 className="slideName">{data && data[0].name}</h2>
          <h2 className="slideTitle">{data && data[0].title}</h2>
          <div className="btns">
            <button className="shopNow">Shop now</button>
            <button className="viewMore">View more</button>
          </div>
        </div>
        <div className="slideImg">
          <img src={data && data[0].image} alt="" />
          <div className="price">
            only <span>${data && data[0].price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
