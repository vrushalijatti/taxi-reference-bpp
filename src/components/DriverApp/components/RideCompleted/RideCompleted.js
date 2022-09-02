import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RideCompletedData, RideStartedData } from "../DriveData";


function RideCompleted() {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2 fixed-bottom">
      {RideCompletedData.Button}
      </Button>
      <Modal
        className="popup"
        size="md"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
          <Modal.Title className="titlle" id="example-modal-sizes-title-sm">
          {RideCompletedData.tittle}
          </Modal.Title>
        <Modal.Body>
        <div>
        <h6 className="h6">{RideCompletedData.subtitle}</h6>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RideCompleted