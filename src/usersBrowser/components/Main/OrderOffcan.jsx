import React, { useState } from "react";
import cart from "../../img/shopping-cart.svg";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OrderOffcan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="##" onClick={handleShow}>
        <img src={cart} alt="" />
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title className="yourBox">Таны сагс</Offcanvas.Title>
          <div className="boxDelete">Сагс хоослох</div>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
