import { useParams } from "react-router-dom";
import { data } from "../../../util/data";

export default function ProductCard() {
  const test = useParams();
  let dat = data.filter((hoho) => hoho.id === test.id);
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={dat[0].image} alt="" />
          </div>
          <div className="proinfo">
            <h3>{dat[0].name}</h3>
            <p>{dat[0].category}</p>
            <p>{dat[0].description}</p>
            {/* <p>{dat[0].spec}</p> */}
            <div className="proprice">
              <p>${dat[0].price}</p>
            </div>
            <a href="../User.jsx">back</a>
          </div>
        </div>
      </div>
    </div>
  );
}
