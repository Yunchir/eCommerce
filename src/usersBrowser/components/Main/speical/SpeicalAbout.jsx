import "../../../style/main/speical/speicalAbout.css";
import { DataContext } from "../../../../App";
import { useContext } from "react";

export default function SpeicalAbout() {
  const { data } = useContext(DataContext);
  return (
    <div>
      <div className="SpeicalAbout">
        <div className="SProductImg">
          <img src={data && data[3].image} alt="" />
        </div>
        <div className="SProductContent">
          <div className="date">22 oct 2021</div>
          <h2>{data && data[1].name}</h2>
          <p>{data && data[1].description}</p>
          <p className="bySpacing">By spacing tech</p>
        </div>
      </div>
    </div>
  );
}
