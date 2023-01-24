import { useParams } from "react-router-dom";
import { data } from "../../../util/data";
import Product from "./Product";
import "../../style/main/search.css";

export default function Search() {
  const test = useParams();

  let dat = data.filter((t) =>
    t.name.toLowerCase().includes(test.product.toLowerCase())
  );
  return (
    <div className="search searchContainer">
      {dat.map((e) => (
        <Product
          naem={e.name}
          img={e.image}
          description={e.description}
          price={e.price}
          category={e.category}
          id={e.id}
        />
      ))}
    </div>
  );
}
