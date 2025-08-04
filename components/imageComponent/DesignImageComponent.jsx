import React from "react";
import { Modal } from "react-bootstrap";

const DesignImageComponent = ({ src, alt, show, handleClose }) => {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <img src={src} alt={alt} style={{ height: "100%", width: "100%" }} />
    </Modal>
  );
};

export default DesignImageComponent;
