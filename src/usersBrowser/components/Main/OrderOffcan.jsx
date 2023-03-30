import React, { useState } from "react";
import cart from "../../img/shopping-cart.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../style/main/orderOffcan.css";
import { DataContext } from "../../../App";
import { useContext } from "react";

export default function OrderOffcan() {
  const { data } = useContext(DataContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("data:", data);
  return (
    data && (
      <>
        <a href="##" onClick={handleShow}>
          <img src={cart} alt="" />
        </a>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="boxHeader">
              <div className="yourBox">Таны сагс</div>
              <div className="boxDelete">Сагс хоослох</div>
            </div>
            {data &&
              data.map((product, index) => {
                return (
                  <div className="order" key={index}>
                    {" "}
                    <div>
                      <img
                        className="productImg"
                        src={product.image}
                        alt="##"
                      />
                    </div>
                    <div className="productOffcan">
                      <span className="productName">{product.name}</span>
                      <span className="productStock">
                        Quantity: {product.stock}
                      </span>
                    </div>
                  </div>
                );
              })}
            <div>
              <button className="proOrder">Захиалах</button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  );
}
