import SpeicalProduct from "./speical/SpeicalProduct";
import "../../style/main/Speical.css";
import SpeicalAbout from "./speical/SpeicalAbout";
import { useContext } from "react";
import { DataContext } from "../../../App";

export default function Speical() {
  const { data } = useContext(DataContext);
  let i = data && Math.floor(Math.random() * data.length);
  return (
    <div className="speical">
      <div className="left">
        <SpeicalProduct data={data && data[i]} />
      </div>

      <div className="right">
        <SpeicalAbout />
        <SpeicalAbout />
      </div>
    </div>
  );
}
